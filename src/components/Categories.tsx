import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setActiveCategory } from '../store/slices/filterSlice';

export default function Categories() {
	const categoryTitles: string[] = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const activeCategory = useAppSelector(state => state.filter.activeCategory);
	const dispatch = useAppDispatch();

	return (
		<div className='categories'>
			<ul>
				{categoryTitles.map((category, i) => (
					<li
						key={category}
						onClick={() => dispatch(setActiveCategory(i))}
						className={activeCategory === i ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
