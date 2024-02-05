"use client";
import { useState, useEffect } from "react";
import styles from "./newsfeedVideoPost.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost } from '@/utils/features/postContentsSlice';
import { getImageBlob, getVideoBlob } from "@/utils/common";

export default function NewsfeedVideoPost({ posts, friends, currentUser }) {

    const [postVideoBlobURLs, setPostVideoBlobURLs] = useState({});
    const [postUserImageBlobURLs, setPostUserImageBlobURLs] = useState({});

    useEffect(() => {
        // Fetch blob URLs for friend images
        const fetchPostVideoBlobURLs = async () => {
            const postBlobURLs = {};
            const postUserBlobURLs = {};
            for (const post of posts) {

                const isFriendPosted = friends.some(friend => friend.friend._id === post.user._id);

                const isCurrentUserPosted = currentUser._id === post.user._id;

                // console.log(isFriendPosted, post);

                if ((isFriendPosted || isCurrentUserPosted) && post?.video) {
                    // console.log("Friend posted");
                    const postBlobURL = await getVideoBlob(post.video);

                    if (post.user?.image !== '') {
                        const postUserBlobURL = await getImageBlob(post.user.image)
                        postUserBlobURLs[post.user?._id] = postUserBlobURL;
                    }
                    // console.log("Blob Url ==> ", postBlobURL);
                    postBlobURLs[post._id] = postBlobURL;
                }
            }
            setPostVideoBlobURLs(postBlobURLs);
            setPostUserImageBlobURLs(postUserBlobURLs);
        };

        fetchPostVideoBlobURLs();
    }, [posts]);

    const dispatch = useAppDispatch();

    const handleLike = async (postId, e) => {
        e.preventDefault();

        // console.log(postId);

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

    const handleDislike = async (postId, e) => {
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

    return (
        <div className={`${styles.myRow} row`}>
            {posts.slice().reverse().map((post) => {
                const isFriendPosted = friends.some(friend => friend.friend._id === post.user._id);

                const isCurrentUserPosted = currentUser._id === post.user._id;

                const isVideoPost = post?.video;

                if (isVideoPost && (isFriendPosted || isCurrentUserPosted)) {
                    return (
                        <div className={`col-md-6 col-sm-6`} key={post._id}>
                            <div className={`${styles.imagePostBox}`}>
                                <Link href='' className={`${styles.videoBox}`} onClick={(e) => e.preventDefault()}>
                                    {postVideoBlobURLs[post._id] ? (
                                        <video
                                            className={`${styles.videoPost}`}
                                            controls
                                            src={postVideoBlobURLs[post._id]}
                                        >
                                        </video>
                                    ) :
                                        (
                                            <video
                                                className={`${styles.videoPost}`}
                                                controls
                                                src={postVideoBlobURLs[post._id]}
                                                poster="/images/imageLoader.gif"
                                            >
                                            </video>
                                        )
                                    }

                                </Link>
                                <div className={`${styles.MainBox}`}>
                                    <div className={`${styles.BoxItems}`}>
                                        <Link
                                            href=""
                                            className={`${styles.likeBox} mybtn`}
                                            onClick={(e) => handleLike(post._id, e)}
                                        >
                                            <Icon icon="fontisto:like" />
                                            <span className={`${styles.likeNum}`}>{post?.likes?.length}</span>
                                        </Link>
                                        <Link
                                            href=""
                                            className={`${styles.likeBox} ${styles.disLikeBox} mybtn`}
                                            onClick={(e) => handleDislike(post._id, e)}
                                        >
                                            <Icon icon="fontisto:dislike" />
                                            <span className={`${styles.likeNum}`}>{post?.dislikes?.length}</span>
                                        </Link>
                                    </div>
                                    <div className={`${styles.userBox}`}>
                                        <div className={`${styles.userAvtar}`}>
                                            {postUserImageBlobURLs[post?.user?._id] ? (
                                                <img
                                                    src={postUserImageBlobURLs[post?.user?._id]}
                                                    className={styles.profilePhotoSm}
                                                    loading="lazy"
                                                />
                                            ) :
                                                (
                                                    <img
                                                        src={process.env.BASE_URL + '/images/imageLoader.gif'}
                                                        className={styles.profilePhotoSm}
                                                        loading="lazy"
                                                    />
                                                )
                                            }
                                        </div>
                                        <div className={`${styles.userCont}`}>
                                            <Link href="" className={`${styles.userName}`}>
                                                {post.user?.firstName + ' ' + post.user?.lastName}
                                            </Link>
                                            <Link href="" className={`${styles.friend}`}>
                                                Friend
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}


        </div>
    )
}