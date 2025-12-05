import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        await mongoose.connect(`mongodb+srv://root:yYlncunuooBDQaRo@websadroit.4whovvs.mongodb.net/${process.env.dbName}`);
        // console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Handle the error or throw an exception as needed
    }
};

export default connectDB;