import connectDB from '@/utils/db';
import PostContent from '@/models/postContentModel';
import { isPostContentValid } from '@/utils/validationCheck';
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {

        const requestFormData = await req.formData();

        // console.log(requestFormData.get('user'));

        // Extract values from formData
        const user = requestFormData.get('user');
        const caption = requestFormData.get('caption');
        const imageBuffer = requestFormData.get('image') && Buffer.from(requestFormData.get('image'), 'base64');
        const videoBuffer = requestFormData.get('video') && Buffer.from(requestFormData.get('video'), 'base64');

        // console.log(user, caption, imageBuffer, videoBuffer);

        // console.log(typeof imageBuffer, imageBuffer);

        const requestJSON = {
            user: user,
            caption: caption,
            image: imageBuffer,
            video: videoBuffer,
        };

        // Validate post content
        const validation = isPostContentValid(requestJSON);
        if (!validation.isValid) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: validation.error }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        };

        // Create a new post using the Post model
        const newPost = new PostContent({
            user,
            caption,
            image: requestFormData.get('image'),
            video: videoBuffer,
        });

        // // Save the new post to the database
        await newPost.save();

        // Respond with a success message or the newly created post
        return Response.json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

export async function GET(req, res) {

    try {

        const session = await getServerSession(authOptions);

        if (session?.user) {

            // console.log("Session ===> ", session);
            // Fetch all users from the database using the User model
            const posts = await PostContent.find();

            // Respond with the fetched posts in JSON format
            return Response.json({ posts });

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

};