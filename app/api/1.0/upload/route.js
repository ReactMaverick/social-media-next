import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

export async function POST(req, res) {
    try {
        const requestFormData = await req.formData();

        const uploadedFile = requestFormData.get('file');

        // Converting file to bytes
        const bytes = await uploadedFile.arrayBuffer();

        // Converting bytes to buffer
        const buffer = Buffer.from(bytes);

        // Generate a unique filename to avoid conflicts
        const uniqueFilename = `${Date.now()}_${uploadedFile.name.replace(/\s/g, '')}`;

        // console.log(uniqueFilename);

        // Determine the type of file (image or video)
        const fileType = uploadedFile.type.startsWith('image/') ? 'images' : 'videos';

        // Specify the path to save the image
        const filePath = join(process.cwd(), 'public', 'uploads', fileType, uniqueFilename);

        // Create the directory if it doesn't exist
        await mkdir(dirname(filePath), { recursive: true });

        // Save the image to the filesystem
        await writeFile(filePath, buffer);

        // Respond with a success message or the newly created post
        return Response.json({ status: 200, message: 'File uploaded successfully', filePath: `/uploads/${fileType}/${uniqueFilename}` });
    } catch (error) {
        console.error('Error uploading file:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}