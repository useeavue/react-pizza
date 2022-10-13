import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCategoryId } from '../store/slices/categoriesSlice';

export default function Categories() {
	const categoryTitles: string[] = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const active = useAppSelector(state => state.categories.categoryId);
	const dispatch = useAppDispatch();

	return (
		<div className='categories'>
			<ul>
				{categoryTitles.map((category, i) => (
					<li
						key={category}
						onClick={() => dispatch(setCategoryId(i))}
						className={active === i ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
