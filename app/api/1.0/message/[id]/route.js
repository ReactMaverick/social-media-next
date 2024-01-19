import connectDB from '@/utils/db';
import Message from '@/models/messageModel';
import Conversation from '@/models/conversationModel';
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
            let receiverId = id;
            let senderId = session.user.id;
            let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } }).populate({
                path: 'messages',
                populate: {
                    path: 'senderId',
                    select: 'firstName email image',
                },
            });
            if (!conversation) {
                return Response.json({ message: 'Message Not Found!' });
            }
            // Process the request and return a response if needed
            return Response.json({ message: 'Messages received successfully', conversations: conversation.messages });
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