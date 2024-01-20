import connectDB from '@/utils/db';
import Message from '@/models/messageModel';
import Conversation from '@/models/conversationModel';
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";

// Connect to MongoDB
connectDB();

export async function POST(req, { params }) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            let senderId = session.user.id;
            const [action, receiverId] = params.id;
            let requestJSON = await req.json();
            const conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });

            if (conversation) {
                let deleteMessageId = requestJSON.messageId;
                const deleteIndex = conversation.messages.findIndex(message => message._id.toString() === deleteMessageId);

                if (deleteIndex !== -1) {
                    conversation.messages.splice(deleteIndex, 1);

                    // Save the updated conversation to the database
                    await conversation.save();
                    await Message.findByIdAndDelete(deleteMessageId);
                    return Response.json({ status: 200, success: true, message: 'Message deleted successfully!', deleteMessageId });
                } else {
                    console.log("Id not found in the array");
                }
            } else {
                console.log("No conversation found");
            }

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