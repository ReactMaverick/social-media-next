import connectDB from '@/utils/db';
import User from '@/models/userModel';
// import { Response } from 'next/server';

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {
        const requestJSON = await req.json()

        console.log("Request JSON ==> ", requestJSON);

        const {
            username,
            email,
            password,
            phone,
            dob,
            gender,
            latitude,
            longitude,
            about_me,
            university_name,
            passout_year,
            education_details,
            company_name,
            work_details,
            designation,
            company_city,
            image,
            hobbies,
            follow_me,
            send_notification,
            enable_tagging
        } = requestJSON;

        // Validate the incoming data (you may want to add more robust validation)
        if (!username || !email || !password || !dob) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: 'Invalid input. Please provide username, email, date of birth and password.' }),
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
            phone,
            dob,
            gender,
            latitude,
            longitude,
            about_me,
            university_name,
            passout_year,
            education_details,
            company_name,
            work_details,
            designation,
            company_city,
            image,
            hobbies,
            follow_me,
            send_notification,
            enable_tagging
        });

        // console.log("New User? ==> ", newUser, username, image, hobbies);

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
