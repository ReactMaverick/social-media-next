import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postContentsReducer from './features/postContentsSlice';
import chatReducer from './features/chatSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            postContents: postContentsReducer,
            chat: chatReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    });
};
