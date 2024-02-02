import connectDB from '@/utils/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import User from '@/models/userModel';

// Connect to MongoDB
connectDB();

export async function GET(req, res) {
    try {

        const session = await getServerSession(authOptions);

        if (session?.user) {

            // console.log("Admin or Not ===> ", adminOrNot);

            // console.log("Session ===> ", session);
            // Fetch all users from the database using the User model
            const users = await User.find().select('firstName lastName profileId image coverImage gender city country about_me company_name designation hobbies');

            // console.log(users);
            // Respond with the fetched users in JSON format
            return Response.json({ users });

        } else {
            const unauthorizedErrorResponse = new Response(
                JSON.stringify({ error: 'Unauthorized access!' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );

            return unauthorizedErrorResponse;
        };


    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error fetching users:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

//*** Delete user */
export async function DELETE(req) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            const result = await User.deleteOne({ _id: session?.user.id });

            if (result.deletedCount === 1) {
                // User deleted successfully
                return new Response(
                    JSON.stringify({ message: 'User deleted successfully' }),
                    { status: 200, headers: { 'Content-Type': 'application/json' } }
                );
            } else {
                // User not found
                return new Response(
                    JSON.stringify({ error: 'User not found' }),
                    { status: 404, headers: { 'Content-Type': 'application/json' } }
                );
            }
        } else {
            const errorResponse = new Response(
                JSON.stringify({ error: 'authentication Error' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

    } catch (error) {
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
