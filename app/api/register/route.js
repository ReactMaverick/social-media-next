import connectDB from '@/utils/db';
import User from '@/models/userModel';
// import { Response } from 'next/server';

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {
        const requestJSON = await req.json()

        const { username, email, password } = requestJSON;

        // Validate the incoming data (you may want to add more robust validation)
        if (!username || !email || !password) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: 'Invalid input. Please provide username, email, and password.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });

        // console.log("existingUser? ==> ", existingUser);

        if (existingUser) {
            const errorResponse = new Response(
                JSON.stringify({ error: 'Email is already in use. Please choose a different one.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Create a new user using the User model
        const newUser = new User({
            username,
            email,
            password,
        });

        // console.log("New User? ==> ", newUser);

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message or the newly created user
        return Response.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
