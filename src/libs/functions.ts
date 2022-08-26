import { Sorting } from '../models/sort';

export const sortBy = (index: number) => {
	switch (index) {
		case Sorting.Popularity:
			return 'sortBy=rating&order=desc';
		case Sorting.Price:
			return 'sortBy=price';
		case Sorting.Title:
			return 'sortBy=title';
		default:
			return '';
	}
};
