import connectDB from '@/utils/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import User from '@/models/userModel';
import Friendship from '@/models/friendshipModel';

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

        const requestedUser = await User.findOne({ profileId: userId });

        if (!requestedUser) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'Friend Request Sent/Received User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if the user is logged in and has an ID in the session
        if (session?.user?.profileId) {
            // Check if the requested ID matches either the MongoDB _id or Google googleId
            if (session.user.profileId === userId) {
                // Request is coming from the same user

                switch (action) {
                    case 'addRequest':

                        return addFriendRequest(requestedUser, requestJSON);

                    case 'acceptRequest':

                        return acceptFriendRequest(requestedUser, requestJSON);

                    case 'deleteRequest':

                        return deleteFriendRequest(requestedUser, requestJSON);

                    case 'cancelRequest':

                        return cancelFriendRequest(requestedUser, requestJSON);

                    case 'removeFriend':

                        return removeFriend(requestedUser, requestJSON);

                    default:
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

async function addFriendRequest(requestedUser, requestJSON) {
    try {
        const { requestReceivedUserId } = requestJSON;

        console.log("Request Received User Id ===> ", requestReceivedUserId);

        // Your logic to send a friend request goes here...

        const requestReceivedUser = await User.findOne({ profileId: requestReceivedUserId });

        console.log("User ===> ", requestReceivedUser);

        if (!requestReceivedUser) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'Friend Request Received User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if a friendship or friend request already exists
        const existingFriendship = await Friendship.findOne({
            user: requestedUser._id,
            friend: requestReceivedUser._id
        });

        if (existingFriendship) {
            // If the friendship or friend request already exists, return an appropriate response
            const duplicateRequestResponse = new Response(
                JSON.stringify({ error: 'Friendship or friend request already exists!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return duplicateRequestResponse;
        }

        // Create a new friendship using the Friendship model
        const newFriendship = new Friendship({
            user: requestedUser._id,
            friend: requestReceivedUser._id,
            status: 'request_sent'
        });

        console.log("New Friendship? ==> ", newFriendship);

        // Save the new friendship to the database
        await newFriendship.save();

        // Respond with a success message
        return Response.json({ message: 'Friend request sent successfully!' });

    } catch (error) {
        console.error('Error sending friend request:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

async function acceptFriendRequest(requestedUser, requestJSON) {
    try {
        const { requestSentUserId } = requestJSON;

        console.log("Request Sent User Id ===> ", requestSentUserId);

        // Your logic to send a friend request goes here...

        const requestSentUser = await User.findOne({ profileId: requestSentUserId });

        console.log("Request Sent User ===> ", requestSentUser);

        if (!requestSentUser) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'Friend Request Sent User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if a friendship or friend request already exists
        const existingFriendshipAccept = await Friendship.findOne({
            user: requestedUser._id,
            friend: requestSentUser._id
        });

        if (existingFriendshipAccept) {
            // If the friendship or friend request already exists, return an appropriate response
            const duplicateRequestResponse = new Response(
                JSON.stringify({ error: 'Friendship or friend request already exists!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return duplicateRequestResponse;
        }

        // Create a new friendship using the Friendship model
        const newFriendshipAccept = new Friendship({
            user: requestedUser._id,
            friend: requestSentUser._id,
            status: 'friend'
        });

        console.log("New Friendship? ==> ", newFriendshipAccept);

        // Save the new friendship to the database
        await newFriendshipAccept.save();

        // Update the friendship document for the request sent user
        await Friendship.findOneAndUpdate(
            { user: requestSentUser._id, friend: requestedUser._id },
            { $set: { status: 'friend' } }
        );

        // Respond with a success message
        return Response.json({ message: 'Friend request accepted successfully!' });

    } catch (error) {
        console.error('Error accepting request:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

async function deleteFriendRequest(requestedUser, requestJSON) {
    try {
        const { requestReceivedUserId } = requestJSON;

        // Your logic to delete a friend request goes here...

        const requestReceivedUser = await User.findOne({ profileId: requestReceivedUserId });

        if (!requestReceivedUser) {
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if a friendship or friend request already exists
        const existingFriendship = await Friendship.findOne({
            user: requestedUser._id,
            friend: requestReceivedUser._id
        });

        if (!existingFriendship) {
            // If the friendship or friend request already exists, return an appropriate response
            const noRequestResponse = new Response(
                JSON.stringify({ error: 'Friendship or friend request not exist!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return noRequestResponse;
        };

        // Find and delete the friendship document
        await Friendship.findOneAndDelete({
            user: requestedUser._id,
            friend: requestReceivedUser._id,
            status: 'request_sent'
        });

        return Response.json({ message: 'Friend request deleted successfully!' });

    } catch (error) {
        console.error('Error deleting friend request:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

async function cancelFriendRequest(requestedUser, requestJSON) {
    try {
        const { requestSentUserId } = requestJSON;

        // Your logic to cancel a friend request goes here...

        const requestSentUser = await User.findOne({ profileId: requestSentUserId });

        if (!requestSentUser) {
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if a friendship or friend request already exists
        const existingFriendship = await Friendship.findOne({
            user: requestedUser._id,
            friend: requestSentUser._id
        });

        if (!existingFriendship) {
            // If the friendship or friend request already exists, return an appropriate response
            const noRequestResponse = new Response(
                JSON.stringify({ error: 'Friendship or friend request not exist!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return noRequestResponse;
        };

        // Find and delete the friendship document
        await Friendship.findOneAndDelete({
            user: requestedUser._id,
            friend: requestSentUser._id,
            status: 'request_sent'
        });

        return Response.json({ message: 'Friend request canceled successfully!' });

    } catch (error) {
        console.error('Error cancelling friend request:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

async function removeFriend(requestedUser, requestJSON) {
    try {
        const { removeFriendUserId } = requestJSON;

        // Your logic to cancel a friend request goes here...

        const removeFriendUser = await User.findOne({ profileId: removeFriendUserId });

        if (!removeFriendUser) {
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found in Database!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Check if a friendship or friend request already exists
        const existingFriendship = await Friendship.findOne({
            $or: [
                { user: requestedUser._id, friend: removeFriendUser._id },
                { user: removeFriendUser._id, friend: requestedUser._id }
            ],
            status: 'friend'
        });

        if (!existingFriendship) {
            // If the friendship or friend request already exists, return an appropriate response
            const noFriendshipResponse = new Response(
                JSON.stringify({ error: 'Friendship does not exist!' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return noFriendshipResponse;
        };

        // Delete the friendship documents for both users
        await Friendship.deleteMany({
            $or: [
                { user: requestedUser._id, friend: removeFriendUser._id },
                { user: removeFriendUser._id, friend: requestedUser._id }
            ]
        });

        return Response.json({ message: 'Friend removed successfully!' });

    } catch (error) {
        console.error('Error removing friend:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}