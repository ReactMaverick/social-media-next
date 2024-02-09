import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";
import fs from 'fs'; // Use with caution and proper security

// Example: Allow specific file extensions and restrict access
const allowedExtensions = ['jpg', 'png', 'jpeg', 'webp'];

export async function GET(req, res) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {

            const { searchParams } = new URL(req.url)
            const id = searchParams.get('id')

            // console.log("Id ==> ", id);

            if (!id || !allowedExtensions.includes(id.split('.').pop())) {
                const errorResponse = new Response(
                    JSON.stringify({ error: 'Invalid asset identifier or extension' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
                return errorResponse;

            }

            const filePath = `public/uploads/images/${id}`; // Customize based on asset location

            // console.log("Filepath ==> ", filePath);

            // console.log("Is image exists ==> ", fs.existsSync(filePath));

            if (!fs.existsSync(filePath)) {
                const errorResponse = new Response(
                    JSON.stringify({ error: 'Asset not found' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
                return errorResponse;
            }

            const fileBuffer = fs.readFileSync(filePath); //Read file as buffer

            // console.log("File content ==> ", fileBuffer);

            const mimeType = `image/${filePath.split('.').pop()}`; // Set content type based on extension

            // console.log("Mime Type ==> ", mimeType);

            const blob = new Blob([fileBuffer], { type: mimeType });

            // console.log("Blob ==> ", blob);

            // Headers.set('Content-Type', mimeType)

            return new Response(blob, { headers: { 'content-type': mimeType } });

        } else {
            const errorResponse = new Response(
                JSON.stringify({ error: 'authentication Error' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }
    } catch (error) {
        // console.error('Error creating post:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
