'use client'
import { useEffect, useState } from "react";
import NewsFeedContainer from "./newsfeedContainer"
import NewsFeedPageContents from "./newsfeedPageContents"
import NewsfeedRow from './newsfeedRow';
import NewsfeedLeftColumn from './newsfeedLeftColumn';
import ProfileCard from './profileCard';
import NewsfeedNav from './newsfeedNav';
import NewsfeedMiddleColumn from './newsfeedMiddleColumn';
import CreatePost from './createPost';
import NewsfeedRightColumn from './newsfeedRightColumn';
import SuggestionsSidebar from './suggestionsSidebar';
import FollowUserSuggestionItem from './followUserSuggestionItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, selectPosts } from '@/utils/features/postContentsSlice';
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import ChatRoom from '@/components/newsfeed/chatRoom';
import { fetchAllFriends, addFriend, removeFriend, selectFriends, fetchLastMessageForFriends, selectLastMessages, selectUnreadCount, selectLastMessagesTime, selectSentFriendRequests, selectReceivedFriendRequests, fetchSentFriendRequests, fetchReceivedFriendRequests } from '@/utils/features/friendsSlice';
import SpinnerWrapper from "../spinnerWrapper/spinnerWrapper";
import { addPost, removePost, clearPosts } from '@/utils/features/postContentsSlice';
import { likePost, dislikePost, addComment, deleteComment } from '@/utils/features/postContentsSlice';

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");
}

let socket;

export default function NewsfeedMessagesPage({ currentUser }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    const users = useSelector(selectAllUsers);

    const friends = useSelector(selectFriends);

    const lastMessages = useSelector(selectLastMessages);

    const unreadCount = useSelector(selectUnreadCount);

    const lastMessageTimes = useSelector(selectLastMessagesTime);

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
        dispatch(fetchLastMessageForFriends(friends));
    }, [friends]);

    useEffect(() => {
        if (!isLoading) {
            // Initialize socket only on the client
            if (io) {

                socketInitializer();

                return () => {
                    if (socket) {
                        socket.disconnect();
                    }
                };
            }
        }


    }, [friends]);

    if (!isSocketInitilized) {
        const fetchCall = async () => {
            await fetch('/api/socket');
        };

        fetchCall();

        setIsSocketInitialized(true);
    };

    async function socketInitializer() {
        // Fetch data only on the client
        if (typeof window !== "undefined") {

            // console.log("Initializing socket");

            // console.log(activeTab);

            // const activeTabUserId = $("#chatroomMessageView")?.find(".tab-pane.active.show")?.attr("id");

            socket = io();

            socket.on("connect", () => {
                const currentUserId = currentUser._id;

                // console.log(userId, roomId);

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

    // console.log("Posts ===> ", posts, currentUser);

    // console.log("Users ===> ", users);

    // console.log("All Friends ===> ", friends);

    // console.log("Last Messages ===> ", lastMessages);

    // console.log("Unread Count ===> ", unreadCount);

    // console.log("Last Message times ===> ", lastMessageTimes);
    return (

        <NewsFeedPageContents>
            {isLoading ?
                <SpinnerWrapper /> :
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

                                <ChatRoom currentUser={currentUser} users={users} friends={friends} lastMessages={lastMessages} unreadCount={unreadCount} lastMessageTimes={lastMessageTimes} />

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
