'use client'
import React, { useEffect, useState } from 'react'
import styles from './timelinePageContents.module.css';
import TimelineLeftColumn from './timelineLeftColumn';
import TimelineMiddleColumn from './timelineMiddleColumn';
import TimelineRightColumn from './timelineRightColumn';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, selectPosts } from '@/utils/features/postContentsSlice';
import CreatePost from '../newsfeed/createPost';
import PostContent from '../newsfeed/postContent';
import PostComment from '../newsfeed/postComment';
import PostCommentReply from "../newsfeed/postCommentReply";
import { getTimeElapsed } from '@/utils/common';

export default function TimelinePageContents({ currentUser, timelineUser, friends }) {
  const [sidebarOption, setSidebarOption] = useState('info');

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchAllPosts());

  }, [dispatch]);

  useEffect(() => {
    // console.log("Sidebar Option ==> ", sidebarOption);
  }, [sidebarOption]);

  return (
    <div className={styles.timelineContents}>
      <div className={`row`}>
        <TimelineLeftColumn>
          {/* <LeftSideBar
            setSidebarOption={setSidebarOption}
            sidebarOption={sidebarOption}
          /> */}
        </TimelineLeftColumn>

        <TimelineMiddleColumn>
          {/* Edit This Section */}
          {timelineUser._id === currentUser._id &&
            <CreatePost currentUser={currentUser} friends={friends} />
          }

          {posts.map((post) =>
            (post.user._id === timelineUser._id) &&
            <PostContent
              key={post._id}
              postId={post._id}
              postImgSrc={post.image}
              postVideSrc={post.video}
              postUserImgSrc={(post.user.image) !== '' ? (post.user.image) : '../../images/no_user.webp'}
              postUserTimelineLink={`/0/timeline/${post.user.profileId}`}
              postedUserName={`${post.user.firstName} ${post.user.lastName}`}
              updateStatusText={getTimeElapsed(post.createdAt)}
              likes={post.likes.length}
              dislikes={post.dislikes.length}
              postCaption={post.caption}
              currentUserImgSrc={(currentUser.image) !== '' ? (currentUser.image) : '../../images/no_user.webp'}
              currentUser={currentUser}
              postedUserId={post.user._id}
            >
              {(post?.comments?.length > 0) && post.comments.map((comment) =>
                <PostComment
                  key={comment._id}
                  profileImgSrc={(comment.user.image) !== '' ? (comment.user.image) : '../../images/no_user.webp'}
                  profileLink={`/0/timeline/${comment.user.profileId}`}
                  userName={`${comment.user.firstName} ${comment.user.lastName}`}
                  comment={comment.content}
                  commentUserId={comment.user._id}
                  currentUser={currentUser}
                  commentId={comment._id}
                  postId={post._id}
                  currentUserImgSrc={(currentUser.image) !== '' ? (currentUser.image) : '../../images/no_user.webp'}
                >
                  {(comment?.replyComment?.length > 0) && comment.replyComment.map((reply) =>

                    <PostCommentReply
                      key={reply._id}
                      profileImgSrc={(reply.user.image) !== '' ? (reply.user.image) : '../../images/no_user.webp'}
                      profileLink={`/0/timeline/${reply.user.profileId}`}
                      userName={`${reply.user.firstName} ${reply.user.lastName}`}
                      commentReply={reply.replyContent}
                      commentReplyUserId={reply.user._id}
                      currentUser={currentUser}
                      postId={post._id}
                      commentId={comment._id}
                      replyCommentId={reply._id}
                    />

                  )}

                </PostComment>
              )}
            </PostContent>
          )}
          {/* Edit This Section */}
        </TimelineMiddleColumn>

        <TimelineRightColumn>
          {/* <RightSideBar /> */}
        </TimelineRightColumn>

      </div>
    </div>
  )
}
