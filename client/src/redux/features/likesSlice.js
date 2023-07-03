import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
	name: 'likesNews',
	initialState: {
		value: { action: '', newsId: '', userId: '' },
	},
	reducers: {
		getLikeAction: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { getLikeAction } = likesSlice.actions;
export default likesSlice.reducer;
