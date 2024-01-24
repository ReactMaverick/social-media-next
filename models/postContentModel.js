import mongoose from "mongoose";

const replyCommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    replyContent: { type: String },
    createdAt: { type: Date, default: Date.now }
})

const postContentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caption: {
        type: String,
        required: function () {
            // Require caption if both image and video are not present
            return !this.image && !this.video;
        },
    },
    image: { type: String },
    video: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        replyComment: [replyCommentSchema],
        createdAt: { type: Date, default: Date.now },
    }],
    createdAt: { type: Date, default: Date.now },
});

const PostContent = mongoose.models.PostContent || mongoose.model('PostContent', postContentSchema);

export default PostContent;
