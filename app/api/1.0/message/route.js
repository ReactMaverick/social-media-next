import connectDB from '@/utils/db';
import Message from '@/models/messageModel';
import Conversation from '@/models/conversationModel';
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";


// Connect to MongoDB
connectDB();


export async function POST(req, res) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            const requestFormData = await req.formData();
            const senderId = session.user.id;
            const receiverId = requestFormData.get('receiverId');
            const receivedMessage = requestFormData.get('message');
            let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });
            if (!conversation) {
                let newConversation = new Conversation({
                    participants: [senderId, receiverId],
                });
                let conversationResult = await newConversation.save();
                if (conversationResult) {
                    let newMessage = new Message({
                        senderId: senderId,
                        message: receivedMessage,
                    });
                    let messageResult = await newMessage.save();
                    if (messageResult) {
                        let updateConversation = await Conversation.findByIdAndUpdate(conversationResult._id, { $push: { messages: messageResult._id } }, { new: true });
                        if (updateConversation) {
                            return Response.json({ status: 200, message: 'Message Send Successfully!', messageResult: messageResult });
                        } else {
                            return Response.json({ status: 200, message: 'Message Send Failed!' });
                        }
                    } else {
                        return Response.json({ status: 200, message: 'Message Send Failed!' });
                    }
                } else {
                    return Response.json({ status: 200, message: 'Message Send Failed!' });
                }
            } else {
                let newMessage = new Message({
                    senderId: senderId,
                    message: receivedMessage,
                });
                let messageResult = await newMessage.save();
                if (messageResult) {
                    let updateConversation = await Conversation.findByIdAndUpdate(conversation._id, { $push: { messages: messageResult._id } }, { new: true });
                    if (updateConversation) {
                        return Response.json({ status: 200, message: 'Message Send Successfully!', messageResult: messageResult });
                    } else {
                        return Response.json({ status: 200, message: 'Message Send Failed!' });
                    }

                } else {
                    return Response.json({ status: 200, message: 'Message Send Failed!' });
                }
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
