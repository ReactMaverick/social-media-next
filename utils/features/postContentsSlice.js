import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action to fetch all posts
export const fetchAllPosts = createAsyncThunk('postContents/fetchAllPosts', async () => {
    try {
        // Replace the URL with the actual endpoint to fetch posts from your API
        const response = await fetch('/api/1.0/postContents');

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        return data.posts; // Assuming the API response has a 'posts' array
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
});

const postContentsSlice = createSlice({
    name: 'postContents',
    initialState: {
        posts: [],
        status: 'idle', // To track the loading status of the posts
        error: null,    // To store any error that may occur during the API request
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
            // console.log('addPost dispatched with payload:', action.payload);
            // console.log('Posts after adding a new post ===> ', state.posts);
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
            // console.log('removePost dispatched with payload:', action.payload);
            // console.log('Posts after removing a post ===> ', state.posts);
        },
        clearPosts: (state) => {
            state.posts = [];
            // console.log('clearPosts dispatched');
        },
    },
    extraReducers: builder => {
        // Handle the pending and fulfilled states of the fetchAllPosts async thunk
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addPost, removePost, clearPosts } = postContentsSlice.actions;
export const selectPosts = (state) => state.postContents.posts;

export default postContentsSlice.reducer;
