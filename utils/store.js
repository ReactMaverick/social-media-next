import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postContentsReducer from './features/postContentsSlice';
// import postReducer from './features/postSlice';
// import commentReducer from './features/commentSlice';
// import likeReducer from './features/likeSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            postContents: postContentsReducer,
            // comment: commentReducer,
            // like: likeReducer,
            // Add other reducers here
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    });
};
