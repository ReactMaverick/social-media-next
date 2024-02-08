import connectDB from '@/utils/db';
import User from '@/models/userModel';
import { generateResetToken, sendResetPasswordEmail } from "@/utils/resetPassword";

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {
        const requestJSON = await req.json();

        const { email } = requestJSON;

        // Validate the incoming data
        if (!email) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: 'Invalid input. Please provide email.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        // Check if the email is already in use
        const requestedUser = await User.findOne({ email });

        // console.log("requestedUser? ==> ", requestedUser);

        if (!requestedUser) {
            const errorResponse = new Response(
                JSON.stringify({ error: 'Email id not found in our database. Kindly provide valid email.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        const resetToken = await generateResetToken();

        // console.log("Reset Token ==> ", resetToken);
        await sendResetPasswordEmail({ email, name: requestedUser.firstName, resetToken });

        return Response.json({ status: 200, message: 'Reset password email sent.' })
    } catch (error) {
        console.error(error);
    }

}