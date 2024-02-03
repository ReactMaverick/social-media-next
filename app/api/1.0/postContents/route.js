import connectDB from '@/utils/db';
import PostContent from '@/models/postContentModel';
import User from '@/models/userModel';
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
        const image = requestFormData.get('image');
        const video = requestFormData.get('video');

        // console.log(user, caption, image, video);

        const requestJSON = {
            user: user,
            caption: caption,
            image: image,
            video: video,
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
            image: image,
            video: video,
        });

        // console.log(newPost);

        // // Save the new post to the database
        await newPost.save();

        // Populate user details
        const populatedPost = await PostContent.findById(newPost._id)
            .populate({
                path: 'user',
                select: 'firstName lastName image profileId coverImage' // Include only these fields
            })
            .populate({
                path: 'comments.user',
                select: 'firstName lastName image profileId coverImage' // Include only these fields for each comment's user
            });

        // Respond with success message and populated post
        return Response.json({ message: 'Post created successfully', post: populatedPost });
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
            const posts = await PostContent.find()
                .populate({
                    path: 'user',
                    select: 'firstName lastName image profileId coverImage' // Include only these fields
                })
                .populate({
                    path: 'comments.user',
                    select: 'firstName lastName image profileId coverImage' // Include only these fields for each comment's user
                })
                .populate({
                    path: 'comments.replyComment.user',
                    select: 'firstName lastName image profileId coverImage' // Include only these fields for each comment's user
                });

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