import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modalBox',
	initialState: {
		value: { component: '' },
	},
	reducers: {
		getModal: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { getModal } = modalSlice.actions;

export default modalSlice.reducer;
