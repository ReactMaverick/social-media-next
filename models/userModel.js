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
});

// Create a Mongoose model named 'User' based on the defined schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export the 'User' model so that it can be used in other parts of the application
export default User;