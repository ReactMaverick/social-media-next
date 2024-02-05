'use client'
import styles from './postCommentReply.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useAppDispatch } from '@/utils/hooks';
import { deleteCommentReply } from '@/utils/features/postContentsSlice';
import { getImageBlob } from '@/utils/common';
import { useState, useEffect } from 'react';

export default function PostCommentReply({ profileImgSrc, profileLink, userName, commentReply, commentReplyUserId, currentUser, postId, commentId, replyCommentId }) {

    const [profileImageBlobURL, setProfileImageBlobURL] = useState(null);
    const [isProfileImageLoading, setIsProfileImageLoading] = useState(true);

    useEffect(() => {
        if (profileImgSrc)
            getImageBlob(profileImgSrc, setProfileImageBlobURL)
                .then(() => {
                    setIsProfileImageLoading(false)
                });

    }, [])

    const dispatch = useAppDispatch();

    const handleReplyDelete = (e) => {
        e.preventDefault();

        // console.log("Delete Clicked", postId, commentId, replyCommentId);

        try {
            // Dispatch the addComment action
            dispatch(deleteCommentReply({ postId, commentId, replyCommentId }))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Comment reply deleted successfully!', action);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error deleting reply:', error);
                });

        } catch (error) {
            console.error('Error deleting comment:', error);
        }

    }

    return (

        <div
            className={styles.postCommentReply}
        >
            {isProfileImageLoading ?
                <img
                    className={styles.profilePhotoSm}
                    src={process.env.BASE_URL + '/images/imageLoader.gif'}
                    loading='lazy'
                /> :
                <img
                    className={styles.profilePhotoSm}
                    src={profileImageBlobURL}
                    loading='lazy'
                />
            }
            <p>
                <Link
                    className={styles.profileLink}
                    href={profileLink}
                >
                    {userName}{" "}
                </Link>
                {commentReply}
            </p>
            {(currentUser && (commentReplyUserId === currentUser._id)) && (
                <Link
                    className={`${styles.btn} ${styles.textRed}`}
                    href=""
                    onClick={handleReplyDelete}
                >
                    <Icon icon="material-symbols:delete" />
                </Link>
            )}

        </div>

    );
};