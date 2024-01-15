'use client'
import styles from './postComment.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost, addComment, deleteComment } from '@/utils/features/postContentsSlice';

export default function PostComment({ profileImgSrc, profileLink, userName, comment, commentUserId, currentUser, commentId, postId }) {

    const dispatch = useAppDispatch();

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

    return (
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
                    href="#"
                    onClick={handleClick}
                >
                    <Icon icon="material-symbols:delete" />
                </Link>
            )}
        </div>
    );
};