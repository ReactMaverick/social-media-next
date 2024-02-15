import { unlink } from 'fs/promises';
import { join, dirname } from 'path';

export async function DELETE(req, res) {
    try {
        const requestJSON = await req.json();

        const filePath = join(process.cwd(), 'public', 'uploads', requestJSON.fileType, requestJSON.fileName);

        // Try to delete the file
        try {
            await unlink(filePath);
        } catch (error) {
            console.error('Error deleting file:', error);
            return Response.json({ status: 500, message: 'Error deleting file' });
        }

        return Response.json({ status: 200, message: 'File deleted successfully' });

    } catch (error) {
        console.error('Error deleting file:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}