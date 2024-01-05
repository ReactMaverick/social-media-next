import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
// import postReducer from './features/postSlice';
// import commentReducer from './features/commentSlice';
// import likeReducer from './features/likeSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            // post: postReducer,
            // comment: commentReducer,
            // like: likeReducer,
            // Add other reducers here
        },
    });
};
