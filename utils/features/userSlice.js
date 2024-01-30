import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action to fetch all posts
export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
    try {
        // Replace the URL with the actual endpoint to fetch posts from your API
        const response = await fetch('/api/1.0/users');

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        return data.users; // Assuming the API response has a 'posts' array
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
});

// Update User Profile Picture
export const updateProfilePictureUser = createAsyncThunk('user/updateProfilePictureUser', async ({ selectedImage }) => {
    try {

        console.log(selectedImage);
        const fileData = new FormData();

        fileData.append('image', selectedImage);

        const response = await fetch('/api/1.0/users/profilePic', {
            method: 'POST',
            body: fileData,
        });

        if (!response.ok) {
            // If the response status is not OK, throw an error
            throw new Error(`Failed to upload image/video. Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("data ==> ", data);
        return { userId: data.updatedUser._id, newProfileImage: data.updatedUser.image };
    } catch (error) {
        throw new Error(`Error adding comment: ${error.message}`);
    }
});

// // Update User Cover Picture
// export const updateCoverPictureUser = createAsyncThunk('user/updateCoverPictureUser', async ({ selectedImage }) => {
//     try {

//         console.log(selectedImage);
//         const fileData = new FormData();

//         fileData.append('image', selectedImage);

//         const response = await fetch('/api/1.0/users/profilePic', {
//             method: 'POST',
//             body: fileData,
//         });

//         if (!response.ok) {
//             // If the response status is not OK, throw an error
//             throw new Error(`Failed to upload image/video. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // console.log("data ==> ", data);
//         return { userId: data.updatedUser._id, newProfileImage: data.updatedUser.image };
//     } catch (error) {
//         throw new Error(`Error adding comment: ${error.message}`);
//     }
// });

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            // console.log('setCurrentUser dispatched with payload:', action.payload);
            // console.log('Current user set ===> ', state.currentUser);
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
            // console.log('clearCurrentUser dispatched');
        },
    },
    extraReducers: builder => {
        // Handle the pending and fulfilled states of the fetchAllUsers async thunk
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        builder
            .addCase(updateProfilePictureUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProfilePictureUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log("Updated User Details ==>", action.payload);

                const { userId, newProfileImage } = action.payload;

                // console.log(state.currentUser);

                // Update the currentUser's image if it matches the userId
                if (state.currentUser && state.currentUser._id === userId) {

                    state.currentUser.image = newProfileImage;
                }

                // Update the user's image in the users array if applicable
                state.users = state.users.map(user =>
                    user._id === userId
                        ? { ...user, image: newProfileImage }
                        : user
                );

            })
            .addCase(updateProfilePictureUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectAllUsers = (state) => state.user.users;


export default userSlice.reducer;
