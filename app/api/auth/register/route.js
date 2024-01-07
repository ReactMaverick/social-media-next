import connectDB from '@/utils/db';
import User from '@/models/userModel';
import { hashPassword } from '@/utils/auth';
import { isDateOfBirthValid, isPasswordValid, isPhoneNumberValid } from '@/utils/validationCheck';

// Connect to MongoDB
connectDB();

export async function POST(req, res) {
    try {
        const requestJSON = await req.json()

        // console.log("Request JSON ==> ", requestJSON);

        const {
            name,
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
            enable_tagging,
            profileId
        } = requestJSON;

        // Validate the incoming data (you may want to add more robust validation)
        if (!name || !email || !password || !dob) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: 'Invalid input. Please provide name, email, date of birth and password.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        const passwordValidationResult = isPasswordValid(password);

        if (!passwordValidationResult.isValid) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: passwordValidationResult.error }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        const dobValidationResult = isDateOfBirthValid(dob);

        if (!dobValidationResult.isValid) {
            const validationErrorResponse = new Response(
                JSON.stringify({ error: dobValidationResult.error }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
            return validationErrorResponse;
        }

        if (phone) {
            const phoneValidationResult = await isPhoneNumberValid(phone);

            if (!phoneValidationResult.isValid) {
                const validationErrorResponse = new Response(
                    JSON.stringify({ error: phoneValidationResult.error }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
                return validationErrorResponse;
            }
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

        const hashedPassword = await hashPassword(password);

        // Create a new user using the User model
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
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
            enable_tagging,
            profileId
        });

        // console.log("New User? ==> ", newUser, name, image, hobbies);

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message or the newly created user
        return Response.json({ message: 'Registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}