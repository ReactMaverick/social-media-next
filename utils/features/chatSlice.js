import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action to fetch all conversations for a user
export const fetchUserConversations = createAsyncThunk(
    'chat/fetchUserConversations',
    async (userId) => {
        try {
            // Replace the URL with the actual endpoint to fetch conversations from your API
            const response = await fetch(`/api/1.0/message/${userId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch conversations');
            }

            const data = await response.json();
            console.log(userId, data);
            return data.conversations;
        } catch (error) {
            throw new Error(`Error fetching conversations: ${error.message}`);
        }
    }
);

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversations: [],
        status: 'idle', // To track the loading status of conversations
        error: null,    // To store any error that may occur during the API request
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Handle the pending and fulfilled states of the fetchUserConversations async thunk
        builder
            .addCase(fetchUserConversations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserConversations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.conversations = action.payload;
            })
            .addCase(fetchUserConversations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectConversations = (state) => state.chat.conversations;

export default chatSlice.reducer;
