import connectDB from '@/utils/db';
import Conversation from '@/models/conversationModel';
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";
import mongoose from 'mongoose';
import Message from '@/models/messageModel';

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
                populate: [
                    {
                        path: 'sender',
                        select: 'firstName lastName email image coverImage',
                    },
                    {
                        path: 'receiver',
                        select: 'firstName lastName email image coverImage',
                    },
                ],
            });
            if (!conversation) {
                return Response.json({ message: 'Message Not Found!' });
            }

            // Update isRead property for all messages in the conversation
            conversation.messages.forEach(async (message) => {

                if (message.receiver._id.toString() === senderId) {
                    // If the receiver of the message is sending the request then isRead will be true
                    await Message.findByIdAndUpdate(message._id, { isRead: true });
                }
            });

            // Process the request and return a response if needed
            return Response.json({ message: 'Messages received successfully', conversationId: conversation._id, conversations: conversation.messages });
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