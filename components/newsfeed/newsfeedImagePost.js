"use client";
import styles from "./newsfeedImagePost.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost } from '@/utils/features/postContentsSlice';

export default function NewsfeedImagePost({ posts, friends, currentUser }) {

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

        const isImagePost = post?.image;

        if (isImagePost && (isFriendPosted || isCurrentUserPosted)) {
          return (
            <div className={`col-md-6 col-sm-6`} key={post._id} id={post._id}>
              <div className={`${styles.imagePostBox}`}>
                <Link href='' className={`${styles.imageBox}`} onClick={(e) => e.preventDefault()}>
                  <img
                    className={`${styles.userAvtarImg}`}
                    src={post.image}
                  />
                </Link>
                <div className={`${styles.MainBox}`}>
                  <div className={`${styles.BoxItems}`}>
                    <Link
                      href="" className={`${styles.likeBox} mybtn`}
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
                      <img src={post?.user?.image} className={styles.profilePhotoSm} />
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
  );
}
