import connectDB from '@/utils/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import User from '@/models/userModel';
import mongoose from 'mongoose';

// Connect to MongoDB
connectDB();

//*** Get a user */
export async function GET(req, { params }) {
    try {

        // console.log("Params ===>", params);

        const session = await getServerSession(authOptions);

        // console.log("Session ==> ", session);

        // Retrieve the user ID from the request parameters
        const { id } = params;

        // Check if the user is logged in and has an ID in the session
        if (session?.user?.id) {
            // Check if the requested ID matches the MongoDB _id
            if (session.user.profileId === id) {
                // Request is coming from the same user

                // Fetch the user from the database using the User model and the provided ID
                const user = await User.findOne({ profileId: id }) // Fetch by profileId

                console.log("User ===> ", user);

                // Check if the user was found
                if (!user) {
                    // If the user is not found, return a 404 response
                    const errorResponse = new Response(
                        JSON.stringify({ error: 'User not found!' }),
                        { status: 404, headers: { 'Content-Type': 'application/json' } }
                    );
                    return errorResponse;
                }

                // Respond with the fetched user in JSON format
                return Response.json({ user });
            } else {
                // Request is coming from another user

                // Return a 401 Unauthorized response
                const unauthorizedError = new Response(
                    JSON.stringify({ error: 'Unauthorized access!' }),
                    { status: 401, headers: { 'Content-Type': 'application/json' } }
                );

                return unauthorizedError;
            }
        } else {
            // User not logged in

            // Return a 401 Unauthorized response
            return new Response(
                JSON.stringify({ error: 'User not logged in!' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }



    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error fetching user:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}

//*** Update a user */
export async function PUT(req, { params, body }) {
    try {
        // Retrieve the user ID from the request parameters
        const { id } = params;

        const requestJSON = await req.json()

        // console.log("Params ==> ", params, "Request JSON ==> ", requestJSON);

        // Fetch the user from the database using the User model and the provided ID
        const user = await User.findOne({ profileId: id })

        // Check if the user was found
        if (!user) {
            // If the user is not found, return a 404 response
            const errorResponse = new Response(
                JSON.stringify({ error: 'User not found!' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
            return errorResponse;
        }

        // Update user properties based on the request body
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

        // Update only if the fields are provided in the request body
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = password;
        if (phone) user.phone = phone;
        if (dob) user.dob = dob;
        if (gender) user.gender = gender;
        if (latitude) user.latitude = latitude;
        if (longitude) user.longitude = longitude;
        if (about_me) user.about_me = about_me;
        if (university_name) user.university_name = university_name;
        if (passout_year) user.passout_year = passout_year;
        if (education_details) user.education_details = education_details;
        if (company_name) user.company_name = company_name;
        if (work_details) user.work_details = work_details;
        if (designation) user.designation = designation;
        if (company_city) user.company_city = company_city;
        if (image) user.image = image;
        if (hobbies) user.hobbies = hobbies;
        if (follow_me !== undefined) user.follow_me = follow_me;
        if (send_notification !== undefined) user.send_notification = send_notification;
        if (enable_tagging !== undefined) user.enable_tagging = enable_tagging;

        // Save the updated user to the database
        await user.save();

        // Respond with the updated user in JSON format
        return Response.json({ message: 'User updated successfully', user });
    } catch (error) {
        // Handle errors if any occur during the database operation
        console.error('Error updating user:', error);
        // Create an error response using Response.error
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    }
}
