import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

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

export const fetchLastMessageForFriends = createAsyncThunk(
    'friends/fetchLastMessageForFriends',
    async (friends) => {
        const promises = friends.map(async (friend) => {
            try {
                const response = await fetch(`/api/1.0/message/${friend.friend._id}/lastMessage`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch last message for friend ${friend._id}: ${response.status}`);
                }

                const data = await response.json();
                return { friendId: friend.friend._id, lastMessage: data.lastMessage, unreadCount: data.unreadCount, lastMessageTime: data.lastMessageTime };
            } catch (error) {
                console.error(error);
                return { friendId: friend._id, lastMessage: null, unreadCount: null, lastMessageTime: null };
            }
        });

        return Promise.all(promises);
    }
);

export const updateLastMessageForFriends = createAction('friends/updateLastMessageForFriends');

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
        lastMessages: {},
        lastMessageTime: {},
        unreadCount: {},
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
        updateLastMessageForFriends: (state, action) => {
            const { friendId, lastMessage, unreadCount, lastMessageTime } = action.payload;

            // Update or add the last message for the specified friendId
            state.lastMessages = {
                ...state.lastMessages,
                [friendId]: lastMessage,
            };

            state.unreadCount = {
                ...state.unreadCount,
                [friendId]: unreadCount,
            }

            state.lastMessageTime = {
                ...state.lastMessageTime,
                [friendId]: lastMessageTime,
            }
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
                state.friends = action.payload;
            })
            .addCase(fetchAllFriends.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        builder
            .addCase(fetchLastMessageForFriends.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLastMessageForFriends.fulfilled, (state, action) => {
                state.status = 'succeeded';
                action.payload.forEach(({ friendId, lastMessage, unreadCount, lastMessageTime }) => {
                    state.lastMessages[friendId] = lastMessage;
                    state.unreadCount[friendId] = unreadCount;
                    state.lastMessageTime[friendId] = lastMessageTime;
                });
            })
            .addCase(fetchLastMessageForFriends.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addFriend, removeFriend } = friendsSlice.actions;
export const selectFriends = (state) => state.friends.friends;
export const selectLastMessages = (state) => state.friends.lastMessages;
export const selectUnreadCount = (state) => state.friends.unreadCount;
export const selectLastMessagesTime = (state) => state.friends.lastMessageTime;

export default friendsSlice.reducer;
