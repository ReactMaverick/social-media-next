import fs from 'fs'; // Use with caution and proper security

// Example: Allow specific file extensions and restrict access
const allowedExtensions = ['mp4', 'webm'];

export default async function handler(req, res) {
    const { id } = req.query; // Get the asset identifier from query parameters

    // console.log("Id ==> ", id);

    if (!id || !allowedExtensions.includes(id.split('.').pop())) {
        return res.status(400).json({ message: 'Invalid asset identifier or extension' });
    }

    const filePath = `public/uploads/videos/${id}`; // Customize based on your asset location

    // console.log("Filepath ==> ", filePath);

    // console.log("Is video exists ==> ", fs.existsSync(filePath));

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'Asset not found' });
    }

    const fileBuffer = fs.readFileSync(filePath); //Read file as buffer

    // console.log("File content ==> ", fileBuffer);

    const mimeType = `video/${filePath.split('.').pop()}`; // Set content type based on extension

    // console.log("Mime Type ==> ", mimeType);

    const blob = new Blob([fileBuffer], { type: mimeType });

    // console.log("Blob ==> ", blob);

    res.setHeader('Content-Type', mimeType);

    res.status(200).send(fileBuffer);
}
