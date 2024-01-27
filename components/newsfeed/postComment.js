'use client'
import styles from './postComment.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost, addComment, deleteComment, addCommentReply } from '@/utils/features/postContentsSlice';
import { useEffect, useRef, useState } from 'react';

export default function PostComment({ profileImgSrc, profileLink, userName, comment, commentUserId, currentUser, commentId, postId, currentUserImgSrc, children }) {

    const [isReplyPressed, setIsReplyPressed] = useState(false);
    const [commentReplyText, setCommentReplyText] = useState('');

    const inputReplyRef = useRef(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isReplyPressed)
            inputReplyRef.current.focus();
    }, [isReplyPressed]);

    const handleClick = (e) => {
        e.preventDefault();

        handleDeleteComment();
    };

    const handleDeleteComment = async () => {
        try {
            // Dispatch the addComment action
            dispatch(deleteComment({ postId, commentId }))
                .then((action) => {
                    // Handle success if needed
                    console.log('Comment deleted successfully!', action);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error deleting comment:', error);
                });

        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const handleReplyClick = (e) => {
        e.preventDefault();

        if (isReplyPressed) {
            setIsReplyPressed(false)
        } else {
            setIsReplyPressed(true)
        }
    }

    const handleCommentReplyChange = (e) => {
        e.preventDefault();

        setCommentReplyText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && commentReplyText.trim() !== '') {
            // Prevent the default behavior of the Enter key
            e.preventDefault();

            handleCommentReply();

        }
    }

    const handleCommentReply = () => {
        try {
            // Dispatch the addComment action
            dispatch(addCommentReply({ postId, commentId, reply: commentReplyText }))
                .then((action) => {
                    // Handle success if needed
                    console.log('Reply added successfully!', action);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error replying on comment:', error);
                });

            setIsReplyPressed(false);
            setCommentReplyText('');
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    }

    return (
        <div className={styles.postCommentOuter}>
            <div
                className={styles.postComment}
            >
                <img
                    className={styles.profilePhotoSm}
                    src={profileImgSrc}
                />
                <p>
                    <Link
                        className={styles.profileLink}
                        href={profileLink}
                    >
                        {userName}{" "}
                    </Link>
                    {comment}
                </p>
                {(currentUser && (commentUserId === currentUser.id)) && (
                    <Link
                        className={`${styles.btn} ${styles.textRed}`}
                        href=""
                        onClick={handleClick}
                    >
                        <Icon icon="material-symbols:delete" />
                    </Link>
                )}

            </div>
            <div className={`${styles.replyComment}`}>
                <Link
                    href=""
                    onClick={handleReplyClick}
                >
                    Reply
                </Link>
                {isReplyPressed &&
                    <div
                        className={styles.postCommentReply}
                    >
                        <img
                            className={styles.profilePhotoSm}
                            src={currentUserImgSrc}
                        />
                        <input
                            className={styles.formControl}
                            type="text"
                            placeholder="Post a reply"
                            value={commentReplyText}
                            onChange={handleCommentReplyChange}
                            onKeyDown={handleKeyDown}
                            ref={inputReplyRef}
                        />
                    </div>
                }
            </div>
            {children}
        </div>
    );
};