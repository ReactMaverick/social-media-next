"use client";
import styles from "./newsfeedImagePost.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { likePost, dislikePost } from '@/utils/features/postContentsSlice';
import { useState, useEffect } from "react";
import { getImageBlob } from '@/utils/common';

export default function NewsfeedImagePost({ posts, friends, currentUser }) {

  const [postImageBlobURLs, setPostImageBlobURLs] = useState({});
  const [postUserImageBlobURLs, setPostUserImageBlobURLs] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch blob URLs for friend images
    const fetchPostImageBlobURLs = async () => {
      const postBlobURLs = {};
      const postUserBlobURLs = {};
      for (const post of posts) {

        const isFriendPosted = friends.some(friend => friend.friend._id === post.user._id);

        const isCurrentUserPosted = currentUser._id === post.user._id;

        // console.log(isFriendPosted, post);

        if ((isFriendPosted || isCurrentUserPosted) && post?.image) {
          // console.log("Friend posted");
          const postBlobURL = await getImageBlob(post.image);

          if (post.user?.image !== '') {
            const postUserBlobURL = await getImageBlob(post.user.image)
            postUserBlobURLs[post.user?._id] = postUserBlobURL;
          }
          // console.log("Blob Url ==> ", postBlobURL);
          postBlobURLs[post._id] = postBlobURL;
        }
      }
      setPostImageBlobURLs(postBlobURLs);
      setPostUserImageBlobURLs(postUserBlobURLs);
    };

    fetchPostImageBlobURLs();
  }, [posts]);

  // console.log("Post Image Blob Urls ==> ", postImageBlobURLs);

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
                  {postImageBlobURLs[post._id] ? (
                    <img
                      className={`${styles.userAvtarImg}`}
                      src={postImageBlobURLs[post._id]}
                      loading="lazy"
                    />
                  ) :
                    (
                      <img
                        className={`${styles.userAvtarImg}`}
                        src={process.env.BASE_URL + '/images/imageLoader.gif'}
                        loading="lazy"
                      />
                    )
                  }

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
  );
}
