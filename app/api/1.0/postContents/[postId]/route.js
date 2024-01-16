import connectDB from '@/utils/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import PostContent from '@/models/postContentModel';

// Connect to MongoDB
connectDB();

//*** Get a post */
export async function GET(req, { params }) {
    try {

        // console.log("Params ===>", params);

        const session = await getServerSession(authOptions);

        // console.log("Session ==> ", session);

        // Retrieve the user ID from the request parameters
        const { postId } = params;

        // Check if the user is logged in and has an ID in the session
        if (session?.user?.id) {

            // Request is coming from the same user

            // Fetch the post from the database using the PostContent model and the provided ID
            const post = await PostContent.findById(postId) // Fetch by Id

            console.log("Post ===> ", post);

            // Check if the post was found
            if (!post) {
                // If the post is not found, return a 404 response
                const errorResponse = new Response(
                    JSON.stringify({ error: 'Post not found!' }),
                    { status: 404, headers: { 'Content-Type': 'application/json' } }
                );
                return errorResponse;
            }

            // Respond with the fetched post in JSON format
            return Response.json({ post });
        } else {
            // User not logged in

            // Return a 401 Unauthorized response
            return new Response(
                JSON.stringify({ error: 'User not logged in!' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }

    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error fetching user:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

//*** Delete a post */
export async function DELETE(req, { params }) {
    try {
        const session = await getServerSession(authOptions);

        // Retrieve the user ID from the request parameters
        const { postId } = params;

        // Check if the user is logged in and has an ID in the session
        if (session?.user?.id) {

            // Request is coming from the same user

            // Find and delete the post from the database using the PostContent model and the provided ID
            const deletedPost = await PostContent.findByIdAndDelete(postId);

            // Check if the post was found and deleted
            if (!deletedPost) {
                // If the post is not found, return a 404 response
                const errorResponse = new Response(
                    JSON.stringify({ error: 'Post not found!' }),
                    { status: 404, headers: { 'Content-Type': 'application/json' } }
                );
                return errorResponse;
            }

            // Respond with a success message in JSON format
            return new Response(
                JSON.stringify({ message: 'Post deleted successfully' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        } else {
            // User not logged in

            // Return a 401 Unauthorized response
            return new Response(
                JSON.stringify({ error: 'User not logged in!' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error deleting post:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
