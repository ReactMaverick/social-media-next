import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            console.log('setCurrentUser dispatched with payload:', action.payload);
            console.log('Current user set ===> ', state.currentUser);
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
            console.log('clearCurrentUser dispatched');
        },
    },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;


export default userSlice.reducer;
