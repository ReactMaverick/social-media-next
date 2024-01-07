import mongoose from 'mongoose';

const friendshipSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    friend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        required: true,
        enum: ["request_sent", "request_pending", "friend"]
    },
}, {
    createdAt: { type: Date, default: Date.now },
});

const Friendship = mongoose.models.Friendship || mongoose.model('Friendship', friendshipSchema);

export default Friendship;
