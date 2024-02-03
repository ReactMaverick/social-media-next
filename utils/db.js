import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        await mongoose.connect(`mongodb+srv://${process.env.userName}:${process.env.password}@cluster0.dxooo7q.mongodb.net/${process.env.dbName}`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Handle the error or throw an exception as needed
    }
};

export default connectDB;