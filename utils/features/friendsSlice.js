import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action to fetch all friends
export const fetchAllFriends = createAsyncThunk('friends/fetchAllFriends', async () => {
    try {
        // Replace the URL with the actual endpoint to fetch friends from your API
        const response = await fetch('/api/1.0/users/friends/all');

        if (!response.ok) {
            throw new Error('Failed to fetch friends');
        }

        const data = await response.json();

        if (data.message == "User has no friends.")
            return [];
        // console.log("Friends data ==> ", data.friends);
        return data.friends; // Assuming the API response has a 'friends' array
    } catch (error) {
        throw new Error(`Error fetching friends: ${error.message}`);
    }
});

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addFriend: (state, action) => {
            state.friends.push(action.payload);
        },
        removeFriend: (state, action) => {
            state.friends = state.friends.filter(friend => friend._id !== action.payload._id);
        },
    },
    extraReducers: builder => {
        // Handle the pending and fulfilled states of the fetchAllFriends async thunk
        builder
            .addCase(fetchAllFriends.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllFriends.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log("payload ==> ", action.payload);
                state.friends = action.payload;
            })
            .addCase(fetchAllFriends.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addFriend, removeFriend } = friendsSlice.actions;
export const selectFriends = (state) => state.friends;

export default friendsSlice.reducer;
