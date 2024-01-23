import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

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

            if (data.message == "Message Not Found!") {
                return {
                    chatId: null,
                    chats: []
                }; // Return blank array if no messages found
            }


            return {
                chatId: data.conversationId,
                chats: data.conversations
            };
        } catch (error) {
            throw new Error(`Error fetching conversations: ${error.message}`);
        }
    }
);

export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({ receiverId, message, selectedImage }) => {
        try {
            const formData = new FormData();
            formData.append('receiverId', receiverId);
            formData.append('message', message);
            if (selectedImage)
                formData.append('image', selectedImage);
            const response = await fetch('/api/1.0/message', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const data = await response.json();

            if (data?.messageResult)
                return {
                    chatId: data.conversationId,
                    chat: data.messageResult
                };
        } catch (error) {
            throw new Error(`Error sending message: ${error.message}`);
        }
    }
);

export const updateFromSocket = createAction('chat/updateFromSocket');

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversations: null,
        status: 'idle', // To track the loading status of conversations
        error: null,    // To store any error that may occur during the API request
    },
    reducers: {
        updateFromSocket: (state, action) => {
            const { chat } = action.payload;
            console.log("Received chat ==> ", action.payload);
            state.conversations.chats.push(chat);
        },
    },
    extraReducers: (builder) => {
        // Handle the pending and fulfilled states of the fetchUserConversations async thunk
        builder
            .addCase(fetchUserConversations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserConversations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log("Payload ==> ", action.payload);
                if (action?.payload)
                    state.conversations = action.payload; // Will erase previous conversations and add new ones
                // state.conversations = [...state.conversations, ...action.payload]; //Add Conversations
            })
            .addCase(fetchUserConversations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        // Handle the pending and fulfilled states of the sendMessage async thunk
        builder
            .addCase(sendMessage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log("Action payload", action.payload);
                // Update the state based on the response from the server
                // For example, you can append the new message to the current conversation
                if (state.conversations.chatId === action.payload.chatId)
                    state.conversations.chats.push(action.payload.chat);

                if (state.conversations.chatId === null) {
                    state.conversations.chatId = action.payload.chatId;
                    state.conversations.chats.push(action.payload.chat);
                }
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

});

export const selectConversations = (state) => state.chat.conversations;

export default chatSlice.reducer;
