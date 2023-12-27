import connectDB from '@/utils/db';
import User from '@/models/userModel';
// import { Response } from 'next/server';

// Connect to MongoDB
connectDB();

export async function GET(req, res) {
    try {
        // Fetch all users from the database using the User model
        const users = await User.find();

        // Respond with the fetched users in JSON format
        return Response.json({ users });
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