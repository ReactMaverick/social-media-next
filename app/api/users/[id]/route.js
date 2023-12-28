import connectDB from '@/utils/db';
import User from '@/models/userModel';
import mongoose from 'mongoose';

// Connect to MongoDB
connectDB();

//*** Get a user */
export async function GET(req, { params }) {
    try {

        // Retrieve the user ID from the request parameters
        const { id } = params;

        // console.log("Params Id ===> ", id);

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // If not valid, return a 400 Bad Request response
            const invalidIdResponse = new Response(
                JSON.stringify({ error: 'Invalid user ID format!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return invalidIdResponse;
        };

        // Fetch the user from the database using the User model and the provided ID
        const user = await User.findById(id);

        console.log("User ===> ", user);

        // Check if the user was found
        if (!user) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Respond with the fetched user in JSON format
        return Response.json({ user });
    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error fetching user:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

//*** Update a user */
export async function PUT(req, { params, body }) {
    try {
        // Retrieve the user ID from the request parameters
        const { id } = params;

        const requestJSON = await req.json()

        // console.log("Params ==> ", params, "Request JSON ==> ", requestJSON);

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // If not valid, return a 400 Bad Request response
            const invalidIdResponse = new Response(
                JSON.stringify({ error: 'Invalid user ID format!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return invalidIdResponse;
        }

        // Fetch the user from the database using the User model and the provided ID
        const user = await User.findById(id);

        // Check if the user was found
        if (!user) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Update user properties based on the request body
        const { username, email, password } = requestJSON;

        // Update only if the fields are provided in the request body
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = password;

        // Save the updated user to the database
        await user.save();

        // Respond with the updated user in JSON format
        return Response.json({ message: 'User updated successfully', user });
    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error updating user:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
