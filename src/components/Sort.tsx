import { useEffect } from 'react';
import { fromEvent, ReplaySubject, takeUntil } from 'rxjs';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { sortMethodTitles } from '../models/sort';
import { setActiveSort, togglePopup } from '../store/slices/filterSlice';

export default function Sort() {
	const sortTitles: string[] = Object.values(sortMethodTitles);
	const activeSort = useAppSelector(state => state.filter.activeSort);
	const isPopupOpen = useAppSelector(state => state.filter.activePopup);
	const currentSortTitle = sortTitles[activeSort];

	const destroy$ = new ReplaySubject<void>(1);
	const dispatch = useAppDispatch();

	useEffect(() => {
		fromEvent(document, 'click')
			.pipe(takeUntil(destroy$))
			.subscribe(e => {
				const clickShouldClose = !(e.target as Element).closest('.sort__label');
				if (clickShouldClose && isPopupOpen) {
					dispatch(togglePopup());
				}
			});

		return () => {
			destroy$.next();
			destroy$.complete();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPopupOpen]);

	return (
		<div className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => dispatch(togglePopup())}>{currentSortTitle}</span>
			</div>
			{isPopupOpen && (
				<div className='sort__popup'>
					<ul>
						{sortTitles.map((title, i) => (
							<li
								key={title}
								className={activeSort === i ? 'active' : ''}
								onClick={() => dispatch(setActiveSort(i))}
							>
								{title}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
