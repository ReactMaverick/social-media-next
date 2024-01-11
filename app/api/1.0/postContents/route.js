import connectDB from '@/utils/db';
import PostContent from '@/models/postContentModel';
import multer from 'multer';
import { isPostContentValid } from '@/utils/validationCheck';

// Connect to MongoDB
connectDB();

// Set up multer for handling file uploads
const upload = multer();

export async function POST(req, res) {
    try {

        const requestJSON = await req.json();

        console.log(requestJSON);

        // const {
        //     user,
        //     caption,
        //     image,
        //     video,
        //     likes,
        //     dislikes,
        //     comments,
        // } = requestJSON;

        // // Validate post content
        // const validation = isPostContentValid(requestJSON);
        // if (!validation.isValid) {
        //     const validationErrorResponse = new Response(
        //         JSON.stringify({ error: validation.error }),
        //         { status: 400, headers: { 'Content-Type': 'application/json' } }
        //     );
        //     return validationErrorResponse;
        // };

        // // Create a new post using the Post model
        // const newPost = new PostContent({
        //     user,
        //     caption,
        //     image,
        //     video,
        //     likes,
        //     dislikes,
        //     comments,
        // });

        // // Save the new post to the database
        // await newPost.save();

        // Respond with a success message or the newly created post
        // return Response.json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}


