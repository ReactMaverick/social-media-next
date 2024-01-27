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
            const image = requestFormData.get('image');
            const video = requestFormData.get('video');
            let imagePath = '';
            let videoPath = '';
            let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });

            console.log(image, video);

            if (image) {
                const fileData = new FormData();
                fileData.append('file', image)
                try {
                    const response = await fetch(process.env.BASE_URL + '/api/1.0/upload', {
                        method: 'POST',
                        body: fileData,
                    });
                    if (!response.ok) {
                        // If the response status is not OK, throw an error
                        throw new Error(`Failed to upload image/video. Status: ${response.status}`);
                    }

                    if (response.ok) {
                        const data = await response.json();
                        imagePath = data.filePath;
                    }
                } catch (e) {
                    console.log("error", e)

                }
            }
            if (video) {
                const fileData = new FormData();
                fileData.append('file', video)
                try {
                    const response = await fetch(process.env.BASE_URL + '/api/1.0/upload', {
                        method: 'POST',
                        body: fileData,
                    });
                    if (!response.ok) {
                        // If the response status is not OK, throw an error
                        throw new Error(`Failed to upload image/video. Status: ${response.status}`);
                    }

                    if (response.ok) {
                        const data = await response.json();
                        videoPath = data.filePath;
                    }
                } catch (e) {
                    console.log("error", e)

                }
            }

            if (!conversation) {
                let newConversation = new Conversation({
                    participants: [senderId, receiverId],
                });
                let conversationResult = await newConversation.save();
                if (conversationResult) {
                    let newMessage = new Message({
                        sender: senderId,
                        receiver: receiverId,
                        message: receivedMessage,
                        image: imagePath,
                        video: videoPath
                    });
                    let messageResult = await newMessage.save();
                    if (messageResult) {
                        messageResult = await Message.findById(messageResult._id)
                            .populate({
                                path: 'sender',
                                select: 'firstName lastName email image coverImage',
                            })
                            .populate({
                                path: 'receiver',
                                select: 'firstName lastName email image coverImage',
                            });

                        let updateConversation = await Conversation.findByIdAndUpdate(conversationResult._id, { $push: { messages: messageResult._id } }, { new: true });
                        if (updateConversation) {
                            return Response.json({ status: 200, message: 'Message Send Successfully!', conversationId: conversationResult._id, messageResult: messageResult });
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
                    sender: senderId,
                    receiver: receiverId,
                    message: receivedMessage,
                    image: imagePath,
                    video: videoPath
                });
                let messageResult = await newMessage.save();
                if (messageResult) {
                    messageResult = await Message.findById(messageResult._id)
                        .populate({
                            path: 'sender',
                            select: 'firstName lastName email image coverImage',
                        })
                        .populate({
                            path: 'receiver',
                            select: 'firstName lastName email image coverImage',
                        });

                    let updateConversation = await Conversation.findByIdAndUpdate(conversation._id, { $push: { messages: messageResult._id } }, { new: true });
                    if (updateConversation) {
                        return Response.json({ status: 200, message: 'Message Send Successfully!', conversationId: conversation._id, messageResult: messageResult });
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
