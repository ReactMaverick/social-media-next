import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action to fetch all posts
export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
    try {
        // Replace the URL with the actual endpoint to fetch posts from your API
        const response = await fetch('/api/1.0/users');

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        return data.users; // Assuming the API response has a 'posts' array
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            // console.log('setCurrentUser dispatched with payload:', action.payload);
            // console.log('Current user set ===> ', state.currentUser);
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
            // console.log('clearCurrentUser dispatched');
        },
    },
    extraReducers: builder => {
        // Handle the pending and fulfilled states of the fetchAllUsers async thunk
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectAllUsers = (state) => state.user.users;


export default userSlice.reducer;
