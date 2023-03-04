import { useEffect, useState } from 'react';
import { debounceTime, distinctUntilChanged, from, ReplaySubject, takeUntil } from 'rxjs';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort';
import { searchString, sortBy, category } from '../libs/functions';
import { Pizza } from '../models/pizza';
import { SearchService } from '../shared/services/search.service';
import { PIZZA_SKELETON_QUANTITY } from '../shared/constants';
import NotFoundBlock from '../components/NotFoundBlock';
import { useAppSelector } from '../hooks/redux';
import axios from 'axios';

type Props = {
	search: SearchService;
};

export default function Home({ search }: Props) {
	const [items, setItems] = useState<Pizza[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState('');

	const destroy$ = new ReplaySubject<void>(1);

	const renderSkeleton = () =>
		[...new Array(PIZZA_SKELETON_QUANTITY)].map((_, i) => (
			<PizzaBlockSkeleton key={i}></PizzaBlockSkeleton>
		));
	const renderItems = () => items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />);

	const activeCategory = useAppSelector(state => state.filter.activeCategory);
	const activeSort = useAppSelector(state => state.filter.activeSort);

	const fetchItems$ = from(
		axios
			.get(
				`https://62ecc63f818ab252b601df3e.mockapi.io/items?${category(
					activeCategory
				)}${sortBy(activeSort)}${searchString(searchInput)}`
			)
			.then(res => res.data)
	);

	useEffect(() => {
		setIsLoading(true);

		fetchItems$.pipe(takeUntil(destroy$)).subscribe({
			next: (data: Pizza[]) => {
				setItems(data);
				setIsLoading(false);
			},
			error: err => {
				setIsLoading(false);
				console.error(err);
			},
		});

		search.searchString$
			.pipe(takeUntil(destroy$), debounceTime(300), distinctUntilChanged())
			.subscribe(value => {
				if (!value.trim()) setSearchInput('');
				if (value.length < 3) return;
				setSearchInput(value);
			});

		window.scrollTo(0, 0);

		return () => {
			destroy$.next();
			destroy$.complete();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCategory, activeSort, searchInput]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? renderSkeleton() : renderItems()}
			</div>

			<div className='content__not-found'>{items.length ? '' : <NotFoundBlock />}</div>
		</div>
	);
}
