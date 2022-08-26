export enum Sorting {
	Popularity,
	Price,
	Title,
}

export const sortTitles: Record<Sorting, string> = {
	[Sorting.Popularity]: 'популярности',
	[Sorting.Price]: 'цене',
	[Sorting.Title]: 'алфавиту',
};
