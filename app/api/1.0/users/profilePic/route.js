import connectDB from '@/utils/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import User from '@/models/userModel';

// Connect to MongoDB
connectDB();

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            const requestFormData = await req.formData();
            const image = requestFormData.get('image');
            const fileData = new FormData();
            fileData.append('file', image)

            console.log("image ==> ", image);

            try {
                const response = await fetch(process.env.BASE_URL + '/api/1.0/upload', {
                    method: 'POST',
                    body: fileData,
                });

                console.log("response ==> ", response);

                if (!response.ok) {
                    // If the response status is not OK, throw an error
                    throw new Error(`Failed to upload image/video. Status: ${response.status}`);
                }

                if (response.ok) {
                    const data = await response.json();
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: session.user.id },
                        { $set: { image: data.filePath } },
                        { new: true }
                    )

                    console.log("updatedUser ==> ", updatedUser);

                    return Response.json({ status: 200, message: 'File uploaded successfully', updatedUser: updatedUser });
                }
            } catch (e) {
                console.error("Error:", error.message);
                return Response.json({ status: 500, error: 'Internal Server Error' });
            }
        } else {
            const errorResponse = new Response(
                JSON.stringify({ error: 'authentication Error' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }
    } catch (error) {
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

export async function DELETE() {
    try {
        const session = await getServerSession(authOptions);
        if (session?.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: session.user.id },
                { $unset: { image: 1 } },
                { new: true }
            );
            return Response.json({ status: 200, message: 'File Delete successfully', updatedUser: updatedUser });
        } else {
            const errorResponse = new Response(
                JSON.stringify({ error: 'authentication Error' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }
    } catch (error) {
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}