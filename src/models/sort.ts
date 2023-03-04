export enum SortMethod {
	Popularity,
	Price,
	Title,
}

export const sortMethodTitles: Record<SortMethod, string> = {
	[SortMethod.Popularity]: 'популярности',
	[SortMethod.Price]: 'цене',
	[SortMethod.Title]: 'алфавиту',
};
