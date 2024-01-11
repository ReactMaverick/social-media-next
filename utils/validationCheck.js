import mongoose from "mongoose";
import User from "@/models/userModel";

export function isPasswordValid(password) {
    // Check if password is less than 8 characters
    if (password.trim().length < 8) {
        return { isValid: false, error: 'Password must be at least 8 characters long' };
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one uppercase letter' };
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one lowercase letter' };
    }

    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one digit' };
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one special character' };
    }

    // If all checks pass, the password is considered valid
    return { isValid: true };
}

export function isDateOfBirthValid(dateOfBirth) {
    const currentDate = new Date();
    const userDateOfBirth = new Date(dateOfBirth);

    // Check if the user is at least 13 years old
    const minAgeDate = new Date();
    minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);

    if (userDateOfBirth > currentDate) {
        return { isValid: false, error: "Date of birth cannot be in the future" };
    }

    if (userDateOfBirth > minAgeDate) {
        return { isValid: false, error: "User must be at least 13 years old" };
    }

    // If all checks pass, the date of birth is considered valid
    return { isValid: true };
}

export async function isPhoneNumberValid(phone) {

    if (await User.exists({ phone: phone })) {
        return { isValid: false, error: "Phone number already exists" };
    }

    if (phone.length !== 10) {
        return { isValid: false, error: "Phone number must be of 10 digits" };
    }

    // If all checks pass, the phone is considered valid
    return { isValid: true };
}

export function isPostContentValid(postContent) {
    const {
        user,
        caption,
        image,
        video,
        likes,
        dislikes,
        comments,
    } = postContent;

    // Validate the incoming data
    if (!user || (!caption && !image && !video)) {
        return { isValid: false, error: 'Invalid input. Please provide user and either caption, image, or video.' };
    }

    // Validate the length of the caption
    if (caption && (caption.trim().length === 0 || caption.length > 1000)) {
        return { isValid: false, error: 'Invalid caption. Caption cannot be empty, and it should be less than or equal to 1000 characters.' };
    }

    // Validate image and video
    if (image && typeof image !== 'object') {
        return { isValid: false, error: 'Invalid image format. Image must be a file object.' };
    }

    if (video && typeof video !== 'object') {
        return { isValid: false, error: 'Invalid video format. Video must be a file object.' };
    }

    // Validate user ID format
    if (!mongoose.Types.ObjectId.isValid(user)) {
        return { isValid: false, error: 'Invalid user ID format.' };
    }

    // If all checks pass, the post content is considered valid
    return { isValid: true };
}