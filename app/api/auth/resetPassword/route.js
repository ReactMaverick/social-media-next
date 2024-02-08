import jwt from 'jsonwebtoken';
import User from '@/models/userModel';
import connectDB from '@/utils/db';
import { hashPassword } from '@/utils/auth';
import { isPasswordValid } from '@/utils/validationCheck';

// Connect to MongoDB
connectDB();

export async function POST(req) {
    const requestJSON = await req.json();
    const { token, newPassword } = requestJSON;

    // console.log("Token ==> ", token);
    // console.log("New Password ==> ", newPassword);
    try {
        const payload = jwt.verify(token, process.env.RESET_PASSWORD_SECRET);

        // console.log("Payload ==> ", payload);

        const user = await User.findOne({ email: payload.email });

        if (!user) {
            return Response.json({ status: 400, error: 'Invalid user.' });
        }

        const passwordValidationResult = isPasswordValid(newPassword);

        if (!passwordValidationResult.isValid) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: passwordValidationResult.error }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        const hashedPassword = await hashPassword(newPassword);

        user.password = hashedPassword;

        // console.log("User ==> ", user);

        await user.save();

        return Response.json({ status: 200, message: 'Password reset successful.' });
    } catch (error) {
        const validationErrorResponse = new Response(
            JSON.stringify({ error: 'Invalid Token' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
        return validationErrorResponse;
    }
}