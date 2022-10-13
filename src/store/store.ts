import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';

const rootReducer = combineReducers({ categories: categoriesReducer });

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
