import { SortMethod } from '../models/sort';

export const sortBy = (index: SortMethod) => {
	switch (index) {
		case SortMethod.Popularity:
			return 'sortBy=rating&order=desc&';
		case SortMethod.Price:
			return 'sortBy=price&';
		case SortMethod.Title:
			return 'sortBy=title&';
		default:
			return '';
	}
};
