import connectDB from '@/utils/db';
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";
import User from '@/models/userModel';

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {

        const session = await getServerSession(authOptions);

        if (session?.user) {
            const adminOrNot = isAdmin(session.user);

            // console.log("Admin or Not ===> ", adminOrNot);

            if (adminOrNot) {
                // Admin

                console.log("Session ===> ", session);
                // Fetch all users from the database using the User model
                const users = await User.find();

                // Respond with the fetched users in JSON format
                return Response.json({ users });

            } else {
                // User

                console.log("Session ===> ", session);

                const unauthorizedErrorResponse = new Response(
                    JSON.stringify({ error: 'Unauthorized access!' }),
                    { status: 401, headers: { 'Content-Type': 'application/json' } }
                );

                return unauthorizedErrorResponse;

            }
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