import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`);
        // console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Handle the error or throw an exception as needed
    }
};

export default connectDB;