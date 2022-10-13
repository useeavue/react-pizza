import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoriesState {
	categoryId: number;
}

const initialState: CategoriesState = {
	categoryId: 0,
};

export const categoryState = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload;
		},
	},
});

export const { setCategoryId } = categoryState.actions;

export default categoryState.reducer;
