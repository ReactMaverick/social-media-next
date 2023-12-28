// Import the Mongoose library, which is an ODM (Object-Document Mapper) for MongoDB
import mongoose from 'mongoose';

// Define the schema for the 'User' collection in MongoDB
const userSchema = new mongoose.Schema({
    // Define a field 'username' of type String, which is required
    username: { type: String, required: true },

    // Define a field 'email' of type String, which is required and must be unique
    email: { type: String, required: true, unique: true },

    // Define a field 'password' of type String, which is required
    password: { type: String, required: true },

    phone: { type: String, unique: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female"] },
    latitude: { type: String },
    longitude: { type: String },
    about_me: { type: String },
    university_name: { type: String },
    passout_year: { type: String },
    education_details: { type: String },
    company_name: { type: String },
    work_details: { type: String },
    designation: { type: String },
    company_city: { type: String },
    image: { type: String },
    hobbies: { type: [String], default: [] },
    follow_me: { type: Boolean, enum: [true, false], default: true },
    send_notification: { type: Boolean, enum: [true, false], default: true },
    enable_tagging: {
        type: Boolean, enum: [true, false], default: true
    },
}, {
    createdAt: { type: Date, default: Date.now },
});

// Create a Mongoose model named 'User' based on the defined schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export the 'User' model so that it can be used in other parts of the application
export default User;