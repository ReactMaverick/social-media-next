import React from 'react'
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import styles from "./photoAlbum.module.css";
import { getImageBlob } from '@/utils/common';

export default function photoAlbum({ timelineUser, posts, setImageSource, setIsImageClicked }) {
  // console.log("TimelineUser, Posts ===> ", timelineUser, posts);

  const [postImageBlobURLs, setPostImageBlobURLs] = useState({});

  useEffect(() => {
    // Fetch blob URLs for friend images
    const fetchPostImageBlobURLs = async () => {
      const postBlobURLs = {};

      for (const post of posts) {

        const isTimelineUserPosted = post.user._id === timelineUser._id;

        const isImagePost = isTimelineUserPosted && post?.image?.length;

        // console.log(isFriendPosted, post);

        if (isTimelineUserPosted && isImagePost) {
          // console.log("Friend posted");
          const postBlobURL = await getImageBlob(post.image);

          // console.log("Blob Url ==> ", postBlobURL);
          postBlobURLs[post._id] = postBlobURL;
        }
      }
      setPostImageBlobURLs(postBlobURLs);
    };

    fetchPostImageBlobURLs();
  }, [posts]);

  const handleImageClick = (e) => {
    // console.log($(e.currentTarget).next().attr('src'));

    const imgSrc = $(e.currentTarget)?.next()?.attr('src');

    setIsImageClicked(true);
    setImageSource(imgSrc);
  }

  return (
    <div className={`${styles.editProfile}`}>
      <div>
        <div className={`block-title`}>
          <h4 className={`${styles.heading}`}>
            <Icon icon="solar:gallery-broken" />
            Photo Gallery
          </h4>
          <div className={`${styles.line}`}></div>

        </div>
        <div className={`${styles.imagesGrid}`}>
          {posts.map((post) => {
            const isTimelineUserPosted = post.user._id === timelineUser._id;

            const isImagePost = isTimelineUserPosted && post?.image?.length;

            if (isTimelineUserPosted && isImagePost) {
              return (
                <div key={post._id} className={`${styles.images} gridimage`}>
                  <div className={`${styles.hoverBtn}`} onClick={handleImageClick}>
                    <Icon icon="bi:zoom-in" />
                  </div>

                  {postImageBlobURLs[post._id] && (
                    <img
                      src={postImageBlobURLs[post._id]}
                      loading="lazy"
                    />
                  )}

                </div>
              )
            }
          })}

        </div>

      </div>
    </div>
  )
}