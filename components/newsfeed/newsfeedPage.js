'use client'
import { useEffect } from "react";
import NewsFeedContainer from "./newsfeedContainer"
import NewsFeedPageContents from "./newsfeedPageContents"
import NewsfeedRow from './newsfeedRow';
import NewsfeedLeftColumn from './newsfeedLeftColumn';
import ProfileCard from './profileCard';
import NewsfeedNav from './newsfeedNav';
import NewsfeedMiddleColumn from './newsfeedMiddleColumn';
import CreatePost from './createPost';
import PostContent from './postContent';
import NewsfeedRightColumn from './newsfeedRightColumn';
import SuggestionsSidebar from './suggestionsSidebar';
import FollowUserSuggestionItem from './followUserSuggestionItem';
import PostComment from './postComment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, selectPosts } from '@/utils/features/postContentsSlice';
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import { fetchAllFriends, addFriend, removeFriend, selectFriends, selectSentFriendRequests, selectReceivedFriendRequests, fetchSentFriendRequests, fetchReceivedFriendRequests } from '@/utils/features/friendsSlice';
import { getTimeElapsed } from '@/utils/common';
import PostCommentReply from "./postCommentReply";
import { useState } from "react";
import SpinnerWrapper from "../spinnerWrapper/spinnerWrapper";
import { addPost, removePost, clearPosts } from '@/utils/features/postContentsSlice';
import { likePost, dislikePost, addComment, deleteComment } from '@/utils/features/postContentsSlice';

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");

    // console.log("IO in newsfeedpage ==> ", io);
}

let socket;

export default function NewsfeedPage({ currentUser }) {

    const [isLoading, setIsLoading] = useState(true);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);


    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    const users = useSelector(selectAllUsers);

    const friends = useSelector(selectFriends);

    const sentFriendRequests = useSelector(selectSentFriendRequests);

    const receivedFriendRequests = useSelector(selectReceivedFriendRequests);

    useEffect(() => {
        setIsLoading(true);
        // Dispatch Redux actions
        Promise.all([
            dispatch(fetchAllPosts()),
            dispatch(fetchAllUsers()),
            dispatch(fetchAllFriends()),
            dispatch(fetchSentFriendRequests()),
            dispatch(fetchReceivedFriendRequests())
        ]).then(() => {
            // After data fetching is done, set loading state to false
            setIsLoading(false);
        }).catch(error => {
            // Handle errors if any
            console.error('Error fetching data:', error);

            setIsLoading(false);
        });
    }, [dispatch]);

    useEffect(() => {
        // console.log(isLoading, friends);
        if (!isLoading) {

            // console.log("IO in newsfeedpage useeffect ==> ", io);
            // Initialize socket only on the client
            if (io) {

                if (!isSocketInitilized) {
                    const fetchCall = async () => {
                        await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/socket');
                    };

                    fetchCall();

                    setIsSocketInitialized(true);
                };

                socketInitializer();

                return () => {
                    if (socket) {
                        // console.log("Socket in disconnect ==> ", socket);
                        socket.disconnect();
                    }
                };
            }
        }

    }, [friends, isLoading, currentUser]);

    async function socketInitializer() {
        // console.log("Type of window ==> ", typeof window);
        // Fetch data only on the client
        if (typeof window !== "undefined") {

            // console.log("Initializing socket");

            socket = io();

            // console.log("Socket in socketinitializer ==> ", socket);

            socket.on("connect", () => {
                const currentUserId = currentUser._id;

                // console.log("Currentuserid, friends", currentUserId, friends);

                // Emit join-room event when the component mounts
                socket.emit("join-newsfeed-room", { userRoomId: currentUserId, friends });

            });

            // New Post
            socket.on("new-post", ({ post, postedUserId }) => {
                // console.log("Received Post Data ==> ", post, postedUserId);

                if (postedUserId !== currentUser._id) {
                    // Dispatch The current post
                    // console.log("Received Post Data ==> ", post, postedUserId);
                    dispatch(addPost(post));
                }

            });

            // Post delete
            socket.on("new-post-delete", ({ postId, postedUserId }) => {
                // console.log("Received Post Id ==> ", postId, postedUserId);

                if (postedUserId !== currentUser._id) {
                    // Dispatch delete post
                    dispatch(removePost(postId));
                }

            });

            // New Post
            socket.on("new-post-comment", ({ postId, postedUserId, newCommentId, comment }) => {
                // console.log("Received Post Data ==> ", post, postedUserId);

                if (comment.user._id !== currentUser._id) {
                    // Dispatch The current post
                    // console.log("Received Post Data ==> ", postId, postedUserId, newCommentId, comment);
                    const socketDetails = {
                        postId: postId,
                        newCommentId: newCommentId,
                        newComment: comment
                    }

                    // console.log("Socket Details ===> ", socketDetails);

                    dispatch(addComment({ socketDetails }))
                        .then((action) => {
                            // Handle success if needed
                            // console.log('Comment added successfully!', action);

                        })
                        .catch((error) => {
                            // Handle error if needed
                            console.error('Error commenting on post:', error);
                        });
                }


            });

        }
    }

    useEffect(() => {
        // console.log("Updated Posts ==> ", posts);

        // console.log("Posts ===> ", posts);

        // console.log("Users ===> ", users);

        // console.log("All Friends ===> ", friends);

        // console.log("Sent Friend Requests ===> ", sentFriendRequests);

        // console.log("Received Friend Requests ===> ", receivedFriendRequests);
    }, [posts, users, friends, sentFriendRequests, receivedFriendRequests]);



    // console.log("Is Loading ==> ", isLoading);

    // console.log("Socket ==> ", socket);

    return (

        <NewsFeedPageContents>
            {isLoading ?
                <main
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <img
                        src={process.env.BASE_URL + "/images/imageLoader.gif"}
                    />
                </main>
                :
                currentUser &&
                (
                    <NewsFeedContainer>
                        <NewsfeedRow>
                            <NewsfeedLeftColumn>
                                <ProfileCard currentUser={currentUser} friends={friends} />
                                <NewsfeedNav currentUser={currentUser} />
                                {/* Chat Block (Not Done) */}
                            </NewsfeedLeftColumn>

                            <NewsfeedMiddleColumn>
                                {socket &&
                                    <CreatePost currentUser={currentUser} friends={friends} socket={socket} />
                                }

                                {(posts && friends && socket) && posts.slice().reverse().map((post) => { // Use slice() to create a copy of the array before reversing
                                    const isFriendPosted = friends.some(friend => friend.friend._id === post.user._id);

                                    const isCurrentUserPosted = currentUser._id === post.user._id;

                                    // console.log("Post ===> ", post);

                                    // console.log(isFriendPosted, isCurrentUserPosted);

                                    if (isCurrentUserPosted || isFriendPosted) {
                                        return (
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
                                                socket={socket}
                                                friends={friends}
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
                                                        socket={socket}
                                                        friends={friends}
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
                                                                socket={socket}
                                                                friends={friends}
                                                            />

                                                        )}

                                                    </PostComment>
                                                )}
                                            </PostContent>
                                        )
                                    }
                                }
                                )}

                            </NewsfeedMiddleColumn>

                            <NewsfeedRightColumn>
                                <SuggestionsSidebar>
                                    {(users && friends) && (
                                        users.map(user => {
                                            const isUserFriend = friends.some((friend) => friend.friend._id === user._id);
                                            const isFriendRequestSent = sentFriendRequests.some((friend) => friend.status === "request_sent" && friend.friend._id === user._id);
                                            const isFriendRequestReceived = receivedFriendRequests.some((friend) => friend.status === "request_sent" && friend.user._id === user._id);

                                            // console.log(isFriendRequestSent, user.firstName);

                                            if (user._id !== currentUser._id && !isUserFriend && !isFriendRequestSent && !isFriendRequestReceived) {
                                                return (
                                                    <FollowUserSuggestionItem
                                                        key={user._id}
                                                        userProfileId={user.profileId}
                                                        currentUser={currentUser}
                                                        imgSrc={(user.image) !== '' ? (user.image) : '../../images/no_user.webp'}
                                                        followUserName={`${user.firstName} ${user.lastName}`}
                                                        userTimelineLink={`/0/timeline/${user.profileId}`}
                                                        receivedRequest={false}
                                                    />
                                                )
                                            } else if (isFriendRequestReceived) {
                                                return (
                                                    <FollowUserSuggestionItem
                                                        key={user._id}
                                                        userProfileId={user.profileId}
                                                        currentUser={currentUser}
                                                        imgSrc={(user.image) !== '' ? (user.image) : '../../images/no_user.webp'}
                                                        followUserName={`${user.firstName} ${user.lastName}`}
                                                        userTimelineLink={`/0/timeline/${user.profileId}`}
                                                        receivedRequest={true}
                                                    />
                                                )
                                            }
                                        }

                                        )
                                    )}

                                </SuggestionsSidebar>
                            </NewsfeedRightColumn>
                        </NewsfeedRow>
                    </NewsFeedContainer>
                )

            }


        </NewsFeedPageContents>
    );
};

