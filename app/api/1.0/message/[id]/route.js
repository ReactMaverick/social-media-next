import connectDB from '@/utils/db';
import Message from '@/models/messageModel'
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";
import mongoose from 'mongoose';

// Connect to MongoDB
connectDB();

export async function GET(req, { params }) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            // Retrieve the user ID from the request parameters
            const { id } = params;
            // Check if id is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error('Invalid message ID format');
            }
            let receiver = id;
            let sender = session.user.id;
            const message = await Message.find({
                $or: [
                    { sender, receiver },
                    { sender: receiver, receiver: sender },
                ],
            }).sort({ timestamp: -1 });
            // Process the request and return a response if needed
            return Response.json({ message: 'Messages received successfully', data: message });
        } else {
            const errorResponse = new Response(
                JSON.stringify({ error: 'authentication Error' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }
    } catch (error) {
        console.error('Error creating post:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}