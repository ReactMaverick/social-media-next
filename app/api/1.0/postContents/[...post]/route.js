import connectDB from '@/utils/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import User from '@/models/userModel';
import PostContent from '@/models/postContentModel';

// Connect to MongoDB
connectDB();

// Add request handler
export async function POST(req, { params }) {
    try {

        let requestJSON

        // Check if there is a request body
        if (req.headers.get('content-type')?.includes('application/json')) {
            // If yes, parse the JSON
            requestJSON = await req.json();
        }

        // console.log(requestJSON);

        // Retrieve the user ID and action from the request parameters
        const [postId, action, commentId] = params.post;

        // console.log(params);

        // Log the received parameters


        const session = await getServerSession(authOptions);

        // console.log('Request sent user id:', postId, session.user.id);
        // console.log('Action:', action);

        const requestedUser = await User.findById(session.user.id);

        const requestedPost = await PostContent.findById(postId);

        // Check if either user or post is null
        if (!requestedUser) {
            return Response.json({ success: false, status: 404, message: 'User not found' });
        }

        if (!requestedPost) {
            return Response.json({ success: false, status: 404, message: 'Post not found' });
        }

        // console.log(requestedUser, requestedPost);

        switch (action) {
            case 'like':
                return handleLike(requestedUser, requestedPost);

            case 'dislike':
                return handleDislike(requestedUser, requestedPost);

            case 'addComment':
                return handleAddComment(requestedUser, requestedPost, requestJSON);

            case 'updateComment':
                return handleUpdateComment(requestedUser, requestedPost, requestJSON, commentId);

            case 'replyComment':
                return handleReplyComment(requestedUser, requestedPost, requestJSON, commentId);

            case 'updateReplyComment':
                return handleUpdateReplyComment(requestedUser, requestedPost, requestJSON, commentId);

            case 'deleteReplyComment':
                return handleDeleteReplyComment(requestedUser, requestedPost, requestJSON, commentId);

            case 'deleteComment':
                return handleDeleteComment(requestedUser, requestedPost, commentId);

            default:
                // Return a 400 Bad Request response
                const invalidActionResponse = new Response(
                    JSON.stringify({ error: 'Invalid action!' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
                return invalidActionResponse;
        }

    } catch (error) {
        console.error('Error liking post:', error);
        // Handle other errors if needed
        const internalServerErrorResponse = new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
        return internalServerErrorResponse;
    };
};

// Function to handle likes
async function handleLike(requestedUser, requestedPost) {
    try {
        // Check if the user has already liked the post
        const userLikedIndex = requestedPost.likes.indexOf(requestedUser._id);

        const userDislikedIndex = requestedPost.dislikes.indexOf(requestedUser._id);

        if (userLikedIndex === -1) {
            // Add user ID to the likes array
            requestedPost.likes.push(requestedUser._id);

            if (userDislikedIndex !== -1) {
                // Dislike Exists
                requestedPost.dislikes.splice(userDislikedIndex, 1);
            };

            // Save the updated post
            await requestedPost.save();
            return Response.json({ status: 200, success: true, message: 'Post liked successfully!', requestedPost });
        } else {
            // Remove user ID from the likes array
            requestedPost.likes.splice(userLikedIndex, 1);
            // Save the updated post
            await requestedPost.save();
            return Response.json({ status: 200, success: true, message: 'Post like removed successfully!', requestedPost });
        }
    } catch (error) {
        console.error('Error handling like:', error);
        throw new Error('Error handling like');
    }
}

// Function to handle dislikes
async function handleDislike(requestedUser, requestedPost) {
    try {
        // Check if the user has already disliked the post
        const userDislikedIndex = requestedPost.dislikes.indexOf(requestedUser._id);

        const userLikedIndex = requestedPost.likes.indexOf(requestedUser._id);

        if (userDislikedIndex === -1) {
            // Add user ID to the dislikes array
            requestedPost.dislikes.push(requestedUser._id);

            if (userLikedIndex !== -1) {
                // Like Exists
                requestedPost.likes.splice(userLikedIndex, 1);
            };

            // console.log("Dislike Add Index ==>", userDislikedIndex, requestedPost);
            // Save the updated post
            await requestedPost.save();
            return Response.json({ status: 200, success: true, message: 'Post disliked successfully!', requestedPost });
        } else {
            // Remove user ID from the dislikes array
            requestedPost.dislikes.splice(userDislikedIndex, 1);

            // console.log("Dislike Remove Index ==>", userDislikedIndex, requestedPost);
            // Save the updated post
            await requestedPost.save();
            return Response.json({ status: 200, success: true, message: 'Post dislike removed successfully!', requestedPost });
        }
    } catch (error) {
        console.error('Error handling dislike:', error);
        throw new Error('Error handling dislike');
    }
}

// Function to handle add comment
async function handleAddComment(requestedUser, requestedPost, requestJSON) {
    try {

        const { comment } = requestJSON;

        if (comment) {

            const newComment = {
                user: await User.findById(requestedUser._id).select('firstName lastName image profileId coverImage'),
                content: comment,
                createdAt: new Date(),
            };

            // Add comment to the comments array
            requestedPost.comments.push(newComment);

            // Save the updated post
            await requestedPost.save();

            const newCommentId = requestedPost.comments[requestedPost.comments.length - 1]._id;

            return Response.json({ status: 200, success: true, message: 'Added comment successfully!', newCommentId, newComment });
        } else {
            // No comment given
            return Response.json({ status: 400, success: false, message: 'Please provide a comment!', errorCode: 'NO_COMMENT_PROVIDED' });
        }
    } catch (error) {
        console.error('Error handling add comment:', error);
        return Response.json({ status: 500, success: false, message: 'Internal Server Error', errorCode: 'INTERNAL_SERVER_ERROR' });
    }
}
// Function to handle update comment

async function handleUpdateComment(requestedUser, requestedPost, requestJSON, commentId) {
    //find comment
    const commentIndex = requestedPost.comments.findIndex(comment => comment._id == commentId);
    if (commentIndex === -1) {
        return Response.json({ status: 404, success: false, message: 'Comment not found' });
    }
    const commentToUpdate = requestedPost.comments[commentIndex];
    // Check if the user deleting the comment is the owner of the comment or the owner of the post
    if (commentToUpdate.user.toString() !== requestedUser._id.toString()) {
        return Response.json({ status: 403, success: false, message: 'Permission denied. You are not allowed to Update this comment' });
    } else {
        if (requestJSON.content) {
            requestedPost.comments[commentIndex].content = requestJSON.content
        }
        await requestedPost.save();

        return Response.json({ status: 200, success: true, message: 'Comment Update successfully!', comment: requestedPost.comments[commentIndex] });
    }
}
//Function to handle reply comment

async function handleReplyComment(requestedUser, requestedPost, requestJSON, commentId) {
    try {
        const { replyContent } = requestJSON;

        if (replyContent) {
            const newReplyComment = {
                user: await User.findById(requestedUser._id).select('firstName lastName image profileId coverImage'),
                replyContent: replyContent,
                createdAt: new Date(),
            };

            let post = await PostContent.findById(requestedPost._id);

            if (post) {
                let comment = post.comments.id(commentId);

                if (comment) {
                    // Add replyComment to the replyComment array of the specific comment
                    comment.replyComment.push(newReplyComment);

                    // Save the updated post
                    await post.save();

                    const newReplyCommentId = comment.replyComment[comment.replyComment.length - 1]._id;

                    // Assuming Response is a variable or object you have defined
                    return Response.json({
                        status: 200,
                        success: true,
                        message: 'Added reply comment successfully!',
                        newReplyCommentId,
                        newReplyComment,
                    });
                } else {
                    return Response.json({
                        status: 404,
                        success: false,
                        message: 'Comment not found',
                    });
                }
            } else {
                return Response.json({
                    status: 404,
                    success: false,
                    message: 'Post not found',
                });
            }
        } else {
            return Response.json({
                status: 400,
                success: false,
                message: 'Invalid replyContent',
            });
        }
    } catch (error) {
        console.error('Error handling reply comment:', error);
        return Response.json({
            status: 500,
            success: false,
            message: 'Internal Server Error',
            errorCode: 'INTERNAL_SERVER_ERROR',
        });
    }
}
//Function to handle update reply comment

async function handleUpdateReplyComment(requestedUser, requestedPost, requestJSON, commentId) {
    try {
        const { replyContent, replyContentID } = requestJSON;
        let post = await PostContent.findById(requestedPost._id);
        if (post) {
            let comment = post.comments.id(commentId);

            if (comment) {
                const commentIndex = comment.replyComment.findIndex(comment => comment._id == replyContentID);
                if (commentIndex === -1) {
                    return Response.json({ status: 404, success: false, message: 'Comment not found' });
                }
                const commentToUpdate = comment.replyComment[commentIndex];
                if (commentToUpdate.user.toString() !== requestedUser._id.toString()) {
                    return Response.json({ status: 403, success: false, message: 'Permission denied. You are not allowed to Update this comment' });
                } else {
                    if (replyContent) {
                        commentToUpdate.replyContent = replyContent
                        await post.save();
                    }
                    return Response.json({ status: 200, success: true, message: 'Comment Update successfully!', comment: commentToUpdate.replyContent });
                }
            } else {
                return Response.json({
                    status: 404,
                    success: false,
                    message: 'Comment not found',
                });
            }
        } else {
            return Response.json({
                status: 404,
                success: false,
                message: 'Post not found',
            });
        }
    } catch (error) {
        console.error('Error handling reply comment:', error);
        return Response.json({
            status: 500,
            success: false,
            message: 'Internal Server Error',
            errorCode: 'INTERNAL_SERVER_ERROR',
        });
    }
}
//Function to handle delete reply comment

async function handleDeleteReplyComment(requestedUser, requestedPost, requestJSON, commentId) {
    try {
        const { replyContentId } = requestJSON;
        let post = await PostContent.findById(requestedPost._id);
        if (post) {
            let comment = post.comments.id(commentId);

            if (comment) {
                const commentIndex = comment.replyComment.findIndex(comment => comment._id == replyContentId);
                if (commentIndex === -1) {
                    return Response.json({ status: 404, success: false, message: 'Comment not found' });
                }
                const commentToDelete = comment.replyComment[commentIndex];
                // Check if the user deleting the comment is the owner of the comment or the owner of the post
                if (commentToDelete.user.toString() !== requestedUser._id.toString()) {
                    return Response.json({ status: 403, success: false, message: 'Permission denied. You are not allowed to delete this comment' });
                }
                comment.replyComment.splice(commentIndex, 1);
                await post.save();
                return Response.json({ status: 200, success: true, message: ' Reply Comment Deleted successfully!' });
            } else {
                return Response.json({
                    status: 404,
                    success: false,
                    message: 'Comment not found',
                });
            }
        } else {
            return Response.json({
                status: 404,
                success: false,
                message: 'Post not found',
            });
        }
    } catch (error) {
        console.error('Error handling reply comment:', error);
        return Response.json({
            status: 500,
            success: false,
            message: 'Internal Server Error',
            errorCode: 'INTERNAL_SERVER_ERROR',
        });
    }
}
// Delete Comment
async function handleDeleteComment(requestedUser, requestedPost, commentId) {
    try {

        // Find the index of the comment to be deleted
        const commentIndex = requestedPost.comments.findIndex(comment => comment._id == commentId);

        if (commentIndex === -1) {
            return Response.json({ status: 404, success: false, message: 'Comment not found' });
        }

        const commentToDelete = requestedPost.comments[commentIndex];

        // Check if the user deleting the comment is the owner of the comment or the owner of the post
        if (commentToDelete.user.toString() !== requestedUser._id.toString() && requestedPost.user.toString() !== requestedUser._id.toString()) {
            return Response.json({ status: 403, success: false, message: 'Permission denied. You are not allowed to delete this comment' });
        }

        // Remove the comment
        requestedPost.comments.splice(commentIndex, 1);

        await requestedPost.save();

        return Response.json({ status: 200, success: true, message: 'Comment deleted successfully!', commentId });
    } catch (error) {
        console.error('Error deleting comment:', error);
        return Response.json({ status: 500, success: false, message: 'Internal Server Error' });
    }
}