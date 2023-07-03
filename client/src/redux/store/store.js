import { configureStore } from '@reduxjs/toolkit';
import alertMessageSlice from '../features/alertMessageSlice';
import authSlice from '../features/authSlice';
import likesSlice from '../features/likesSlice';
import modalSlice from '../features/modalSlice';

export default configureStore({
	reducer: {
		alertMessage: alertMessageSlice,
		likesNews: likesSlice,
		checkAuth: authSlice,
		modal: modalSlice,
	},
});
