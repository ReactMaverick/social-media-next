import fs from 'fs'; // Use with caution and proper security

// Example: Allow specific file extensions and restrict access
const allowedExtensions = ['jpg', 'png', 'jpeg', 'webp'];

export async function GET(req, res) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    console.log("Id ==> ", id);

    if (!id || !allowedExtensions.includes(id.split('.').pop())) {
        return Response.json({ status: 400, message: 'Invalid asset identifier or extension' })
    }

    const filePath = `public/uploads/images/${id}`; // Customize based on your asset location

    console.log("Filepath ==> ", filePath);

    console.log("Is image exists ==> ", fs.existsSync(filePath));

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'Asset not found' });
    }

    const fileBuffer = fs.readFileSync(filePath); //Read file as buffer

    console.log("File content ==> ", fileBuffer);

    const mimeType = `image/${filePath.split('.').pop()}`; // Set content type based on extension

    console.log("Mime Type ==> ", mimeType);

    const blob = new Blob([fileBuffer], { type: mimeType });

    console.log("Blob ==> ", blob);

    // Headers.set('Content-Type', mimeType)

    return new Response(blob, { headers: { 'content-type': mimeType } });
}
