import { Dispatch } from 'react';

export type CategoriesContext = {
	activeValue: number;
	onClickCategory: Dispatch<React.SetStateAction<number>>;
};

export type SortContext = {
	activeSort: number;
	onClickSort: Dispatch<React.SetStateAction<number>>;
};
