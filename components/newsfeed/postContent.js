'use client'
import styles from './postContent.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost, addComment, deleteComment, removePost } from '@/utils/features/postContentsSlice';
import { useState } from 'react';

export default function PostContent({ children, postImgSrc, postVideSrc, postUserImgSrc, postUserTimelineLink, postedUserName, updateStatusText, likes, dislikes, postCaption, currentUserImgSrc, postId, currentUser, postedUserId, socket, friends }) {

    const [commentText, setCommentText] = useState('');

    const dispatch = useAppDispatch();

    const handleLike = async (e) => {
        e.preventDefault();

        try {
            // Dispatch the likePost action to update the Redux store
            dispatch(likePost(postId))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Post liked/unliked successfully:', action);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error liking post:', error);
                });
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleDislike = async (e) => {
        e.preventDefault();

        try {
            // Dispatch the likePost action to update the Redux store
            dispatch(dislikePost(postId))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Post disliked/undisliked successfully:', action);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error liking post:', error);
                });
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleCommentChange = (e) => {
        const newComment = e.target.value;

        setCommentText(newComment);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && commentText.trim() !== '') {
            // Prevent the default behavior of the Enter key
            e.preventDefault();

            handleAddComment();
        }
    };

    const handleAddComment = async () => {
        try {
            // Dispatch the addComment action
            dispatch(addComment({ postId, content: commentText }))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Comment added successfully!', action);

                    if (socket) {
                        // console.log("Socket....");
                        // Emit send-message event with user details and room ID
                        socket.emit("publish-post-comment", {
                            postId,
                            friends: friends,
                            postedUserId: postedUserId,
                            newCommentId: action.payload.newCommentId,
                            comment: action.payload.comment
                        });
                    }

                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error commenting on post:', error);
                });

            // Clear the input field after adding a comment
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleRemovePostButtonClick = (e) => {
        e.preventDefault();

        handlePostDelete(postId);
    };

    const handlePostDelete = async (postId) => {
        try {
            // Make a DELETE request to the API to delete the post
            const response = await fetch(`/api/1.0/postContents/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            // Check if the request was successful (status code 200-299)
            if (response.ok) {
                // Post deleted successfully
                const responseData = await response.json();
                // console.log('Post deleted successfully:', responseData);
                // Add any additional logic or state updates as needed

                dispatch(removePost(postId));

                if (socket) {
                    // console.log("Socket....");
                    // Emit send-message event with user details and room ID
                    socket.emit("delete-post", {
                        postId,
                        friends: friends,
                        postedUserId: postedUserId,
                    });
                }

            } else {
                // Handle other error cases
                console.error('Error deleting post:', response.error);
                // Show an error message or handle the error as needed
            }
        } catch (error) {
            console.error('Error deleting post:', error.message);
            // Handle network errors or other exceptions
        }
    };

    return (
        <div
            className={styles.postContent}
        >
            {postImgSrc ? (
                <img
                    className={styles.postImage}
                    alt="post-image"
                    src={postImgSrc}
                />
            ) : (postVideSrc && (
                <div className={styles.videoWrapper}>
                    <video className={styles.postVideo} controls>
                        <source src={postVideSrc} type="video/mp4" />
                    </video>
                </div>
            ))}

            <div
                className={styles.postContainer}
            >
                <img
                    className={`${styles.profilePhotoMd} ${styles.pullLeft}`}
                    alt="user"
                    src={postUserImgSrc}
                />
                <div
                    className={styles.postDetail}
                >
                    <div className="user-info">
                        <h5
                            className={styles.h5}
                        >
                            <Link
                                className={styles.profileLink}
                                href={postUserTimelineLink}
                            >
                                {postedUserName}
                            </Link>{" "}

                        </h5>
                        <p
                            className={`${styles.textMuted} text-muted`}
                        >
                            {updateStatusText}
                        </p>
                    </div>
                    <div
                        className={styles.reaction}
                    >
                        <Link
                            className={`${styles.btn} ${styles.textGreen}`}
                            href=""
                            onClick={handleLike}
                        >
                            <Icon icon="f7:hand-thumbsup-fill" />{" "}
                            {likes}
                        </Link>
                        <Link
                            className={`${styles.btn} ${styles.textRed}`}
                            href=""
                            onClick={handleDislike}
                        >
                            <Icon icon="f7:hand-thumbsdown-fill" />{" "}
                            {dislikes}
                        </Link>
                        {(currentUser && (postedUserId === currentUser._id)) && (
                            <Link
                                className={`${styles.btn} ${styles.textRed}`}
                                href=""
                                onClick={handleRemovePostButtonClick}
                            >
                                <Icon icon="material-symbols:delete" />
                            </Link>
                        )}
                    </div>
                    <div
                        className={styles.lineDivider}
                    />
                    <div
                        className={styles.postText}
                    >
                        <p>
                            {postCaption}
                        </p>
                    </div>
                    <div
                        className={styles.lineDivider}
                    />
                    {children}
                    <div
                        className={styles.postComment}
                    >
                        <img
                            className={styles.profilePhotoSm}
                            src={currentUserImgSrc}
                        />
                        <input
                            className={styles.formControl}
                            type="text"
                            placeholder="Post a comment"
                            value={commentText}
                            onChange={handleCommentChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
