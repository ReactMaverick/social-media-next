import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postContentsReducer from './features/postContentsSlice';
import chatReducer from './features/chatSlice';
import friendsReducer from './features/friendsSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            postContents: postContentsReducer,
            chat: chatReducer,
            friends: friendsReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    });
};
