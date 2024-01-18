import connectDB from '@/utils/db';
import Message from '@/models/messageModel'
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";


// Connect to MongoDB
connectDB();


export async function POST(req, res) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            const requestJSON = await req.json();
            // Create a new post using the Post model
            const sendMessage = new Message({
                sender: session.user.id,
                receiver: requestJSON.receiver,
                content: requestJSON.content,
            });
            await sendMessage.save();
            // Process the request and return a response if needed
            return Response.json({ message: 'Message created successfully', Message: sendMessage });
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
