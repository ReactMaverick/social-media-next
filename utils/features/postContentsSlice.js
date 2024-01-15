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

// Define the async thunk action to like a post
export const likePost = createAsyncThunk('postContents/likePost', async (postId) => {
    try {
        const response = await fetch(`/api/1.0/postContents/${postId}/like`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to like post');
        }

        const data = await response.json();
        return { postId, likes: data.requestedPost.likes, dislikes: data.requestedPost.dislikes };
    } catch (error) {
        throw new Error(`Error liking post: ${error.message}`);
    }
});

// Define the async thunk action to dislike a post
export const dislikePost = createAsyncThunk('postContents/dislikePost', async (postId) => {
    try {
        const response = await fetch(`/api/1.0/postContents/${postId}/dislike`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to dislike post');
        }

        const data = await response.json();
        return { postId, dislikes: data.requestedPost.dislikes, likes: data.requestedPost.likes };
    } catch (error) {
        throw new Error(`Error disliking post: ${error.message}`);
    }
});

// Add Comment
export const addComment = createAsyncThunk('postContents/addComment', async ({ postId, content }) => {
    try {
        const response = await fetch(`/api/1.0/postContents/${postId}/addComment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: content }),
        });

        if (!response.ok) {
            throw new Error('Failed to add comment');
        }

        const data = await response.json();
        console.log("data ==> ", data);
        return { postId, comment: data.newComment };
    } catch (error) {
        throw new Error(`Error adding comment: ${error.message}`);
    }
});

// Delete Comment
export const deleteComment = createAsyncThunk('postContents/deleteComment', async ({ postId, commentId }) => {
    try {
        const response = await fetch(`/api/1.0/postContents/${postId}/deleteComment/${commentId}`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to delete comment');
        }

        return { postId, commentId };
    } catch (error) {
        throw new Error(`Error deleting comment: ${error.message}`);
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

        // LikePost
        builder
            .addCase(likePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { postId, likes, dislikes } = action.payload;
                // console.log("Payload ===> ", action.payload);
                state.posts = state.posts.map(post =>
                    post._id === postId ? { ...post, likes, dislikes } : post
                );
            })
            .addCase(likePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        // Dislike post
        builder
            .addCase(dislikePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(dislikePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { postId, dislikes, likes } = action.payload;
                state.posts = state.posts.map(post =>
                    post._id === postId ? { ...post, dislikes, likes } : post
                );
            })
            .addCase(dislikePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        // Add Comments
        builder
            .addCase(addComment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { postId, comment } = action.payload;
                console.log("Payload ===> ", action.payload);
                state.posts = state.posts.map(post =>
                    post._id === postId
                        ? { ...post, comments: [...post.comments, comment] }
                        : post
                );
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        // Delete Comments
        builder
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { postId, commentId } = action.payload;
                state.posts = state.posts.map(post =>
                    post._id === postId
                        ? { ...post, comments: post.comments.filter(comment => comment._id !== commentId) }
                        : post
                );
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addPost, removePost, clearPosts } = postContentsSlice.actions;
export const selectPosts = (state) => state.postContents.posts;

export default postContentsSlice.reducer;
