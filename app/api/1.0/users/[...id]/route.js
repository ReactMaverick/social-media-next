import connectDB from '@/utils/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import User from '@/models/userModel';
import mongoose from 'mongoose';

// Connect to MongoDB
connectDB();

// Add request handler
export async function POST(req, { params }) {
    try {

        const requestJSON = await req.json();

        // Retrieve the user ID and action from the request parameters
        const [userId, action] = params.id;

        // console.log(params);

        // Log the received parameters


        const session = await getServerSession(authOptions);

        console.log('Request sent user id:', userId, session.user.profileId);
        console.log('Action:', action);

        // Check if the user is logged in and has an ID in the session
        if (session?.user?.profileId) {
            // Check if the requested ID matches either the MongoDB _id or Google googleId
            if (session.user.profileId === userId) {
                // Request is coming from the same user

                // Check if the action is 'addRequest'
                if (action === 'addRequest') {
                    // Process the addRequest action
                    // Handle the body of the request (assuming it contains necessary information)

                    // For example, you might add logic to send a friend request
                    // between the current user and another user specified in the body

                    const { requestReceivedUserId } = requestJSON;

                    console.log("Request Received User Id ===> ", requestReceivedUserId);

                    // Your logic to send a friend request goes here...

                    // Respond with a success message
                    return Response.json({ message: 'Friend request sent successfully!' });
                } else {
                    // Invalid action

                    // Return a 400 Bad Request response
                    const invalidActionResponse = new Response(
                        JSON.stringify({ error: 'Invalid action!' }),
                        { status: 400, headers: { 'Content-Type': 'application/json' } }
                    );
                    return invalidActionResponse;
                }
            } else {
                // Request is coming from another user

                // Return a 401 Unauthorized response
                const unauthorizedError = new Response(
                    JSON.stringify({ error: 'Unauthorized access!' }),
                    { status: 401, headers: { 'Content-Type': 'application/json' } }
                );

                return unauthorizedError;
            }
        } else {
            // User not logged in

            // Return a 401 Unauthorized response
            return new Response(
                JSON.stringify({ error: 'User not logged in!' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error processing addRequest:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
