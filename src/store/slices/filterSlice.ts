import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
	activeCategory: number;
	activeSort: number;
	activePopup: boolean;
}

const initialState: FilterState = {
	activeCategory: 0,
	activeSort: 0,
	activePopup: false,
};

export const filterState = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<number>) => {
			state.activeCategory = action.payload;
		},
		setActiveSort: (state, action: PayloadAction<number>) => {
			state.activeSort = action.payload;
			state.activePopup = false;
		},
		togglePopup: state => {
			state.activePopup = !state.activePopup;
		},
	},
});

export const { setActiveCategory, setActiveSort, togglePopup } = filterState.actions;

export default filterState.reducer;
