import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort';
import { sortBy } from '../libs/functions';
import { Pizza } from '../models/pizza';
import { PIZZA_SKELETON_QUANTITY } from '../shared/constants';

export default function Home() {
	const [items, setItems] = useState<Pizza[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSort, setActiveSort] = useState(0);

	const renderSkeleton = () =>
		[...new Array(PIZZA_SKELETON_QUANTITY)].map((_, i) => (
			<PizzaBlockSkeleton key={i}></PizzaBlockSkeleton>
		));
	const renderItems = () => items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://62ecc63f818ab252b601df3e.mockapi.io/items?${
				activeCategory ? 'category=' + activeCategory + '&' : ''
			}${sortBy(activeSort)}`
		)
			.then(res => res.json())
			.then((data: Pizza[]) => {
				setItems(data);
				setIsLoading(false);
			})
			.catch(err => {
				console.error(err);
			});

		window.scrollTo(0, 0);
	}, [activeCategory, activeSort]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeValue={activeCategory}
					onClickCategory={setActiveCategory}
				/>
				<Sort activeSort={activeSort} onClickSort={setActiveSort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? renderSkeleton() : renderItems()}
			</div>
		</div>
	);
}
