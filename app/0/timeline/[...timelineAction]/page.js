'use client'
import TimelinePage from "@/components/timeline/timelinePage";
import TimelineEditPage from "@/components/timeline//timelineEditPage";
import TimelineAboutPage from '@/components/timeline/timelineAboutPage';
import TimelineAlbumPage from '@/components/timeline/timelineAlbumPage';
import TimelineFriendsPage from '@/components/timeline/timelineFriendsPage';
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import { fetchAllPosts, selectPosts } from '@/utils/features/postContentsSlice';
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import { fetchAllFriends, addFriend, removeFriend, selectFriends, selectSentFriendRequests, selectReceivedFriendRequests, fetchSentFriendRequests, fetchReceivedFriendRequests } from '@/utils/features/friendsSlice';
import { useEffect, useState } from "react";
import Link from "next/link";
import SpinnerWrapper from "@/components/spinnerWrapper/spinnerWrapper";
import { addPost, removePost, clearPosts } from '@/utils/features/postContentsSlice';
import { likePost, dislikePost, addComment, deleteComment } from '@/utils/features/postContentsSlice';

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");
}

let socket;

export default function Timeline({ params }) {
    // console.log(params);

    const [isLoading, setIsLoading] = useState(true);
    const [isCurrentUserSet, setIsCurrentUserSet] = useState(false);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);

    const [profileId, page] = params.timelineAction;

    const [timelineUser, setTimelineUser] = useState(null);

    const [friendshipStatus, setFriendshipStatus] = useState(null);

    // console.log(profileId, page);

    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);

    const posts = useSelector(selectPosts);

    const users = useSelector(selectAllUsers);

    const friends = useSelector(selectFriends);

    const sentFriendRequests = useSelector(selectSentFriendRequests);

    const receivedFriendRequests = useSelector(selectReceivedFriendRequests);

    const { data: session, status } = useSession()

    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            // console.log(session.user);
            users?.forEach((user) => {
                if (user._id === session.user.id) {

                    dispatch(setCurrentUser(user))

                    // console.log("Current User after dispatch ==> ", currentUser)

                    setIsCurrentUserSet(true);
                }

            })

        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, session, users]);

    useEffect(() => {

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
        if (currentUser?.profileId === profileId) {
            // console.log("if condition => ", currentUser, profileId);
            setTimelineUser(currentUser)
            setFriendshipStatus('currentUser');
        } else {
            for (const user of users) {
                if (user?.profileId === profileId) {
                    // console.log("else condition => ", user, profileId);
                    setTimelineUser(user)
                }
            };
        }

        for (const friend of friends) {
            // console.log(friend);
            if (friend?.friend?.profileId === profileId) {
                // Existing friend
                setFriendshipStatus('friend')
            }
        }

        for (const friendRequest of sentFriendRequests) {
            // console.log(friend);
            if (friendRequest?.friend?.profileId === profileId) {
                // Existing friend request sent
                setFriendshipStatus('sentFriendRequest')
            }
        }

        for (const friendRequest of receivedFriendRequests) {
            // console.log(friend);
            if (friendRequest?.user?.profileId === profileId) {
                // Existing friend request sent
                setFriendshipStatus('receivedFriendRequest')
            }
        }

        const isFriend = friends.some(friend => friend?.friend?.profileId === profileId);

        const isFriendRequestSent = sentFriendRequests.some(friendRequest => friendRequest?.friend?.profileId === profileId);

        const isFriendRequestReceived = receivedFriendRequests.some(friendRequest => friendRequest?.user?.profileId === profileId);

        // console.log(friendshipStatus, isFriend, isFriendRequestSent, isFriendRequestReceived);

        if (!isFriend && !isFriendRequestSent && !isFriendRequestReceived && !friendshipStatus)
            setFriendshipStatus('notFriend')

    }, [timelineUser, friends, friendshipStatus])


    // console.log("Posts ===> ", posts);

    // console.log("Users ===> ", users);

    // console.log("All Friends ===> ", friends);

    // console.log("Sent Friend Requests ===> ", sentFriendRequests);

    // console.log("Received Friend Requests ===> ", receivedFriendRequests);


    // console.log('Current User in Timeline Page:', currentUser);


    // console.log(session, status);

    // console.log("Socket ===> ", socket);

    useEffect(() => {
        // console.log("Friends, isloading, iscurrentuserset ==> ", friends, isLoading, isCurrentUserSet);
        if (!isLoading && isCurrentUserSet) {
            // Initialize socket only on the client
            if (io) {

                if (!isSocketInitilized) {
                    const fetchCall = async () => {
                        await fetch('/api/socket');
                    };

                    fetchCall();

                    setIsSocketInitialized(true);
                };

                socketInitializer();

                return () => {
                    if (socket) {
                        socket.disconnect();
                    }
                };
            }
        }


    }, [friends, isLoading, isCurrentUserSet]);



    async function socketInitializer() {
        // console.log("Type of window ==> ", typeof window);
        // Fetch data only on the client
        if (typeof window !== "undefined") {

            // console.log("Initializing socket");

            socket = io();

            socket.on("connect", () => {
                const currentUserId = currentUser._id;

                // console.log("Current user id ==? ", currentUserId);

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

    if (status === "authenticated") {
        // Authenticated User
        // console.log(timelineUser);
        if (isLoading && !isCurrentUserSet) {
            return <main
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <img
                    src={process.env.BASE_URL + "/images/imageLoader.gif"}
                />
            </main>
        } else if (timelineUser && friendshipStatus && currentUser) {
            switch (page) {
                case 'edit':
                    return (
                        <TimelineEditPage
                            timelineUserId={profileId}
                            timelineUser={timelineUser}
                            friendshipStatus={friendshipStatus}
                            setFriendshipStatus={setFriendshipStatus}
                            currentUser={currentUser}
                        />
                    )

                case 'about':
                    return (
                        <TimelineAboutPage
                            timelineUserId={profileId}
                            timelineUser={timelineUser}
                            friendshipStatus={friendshipStatus}
                            setFriendshipStatus={setFriendshipStatus}
                        />
                    )

                case 'album':
                    return (
                        <TimelineAlbumPage
                            timelineUserId={profileId}
                            timelineUser={timelineUser}
                            friendshipStatus={friendshipStatus}
                            setFriendshipStatus={setFriendshipStatus}
                            posts={posts}
                        />
                    )

                case 'friends':
                    return (
                        <TimelineFriendsPage
                            timelineUserId={profileId}
                            timelineUser={timelineUser}
                            friendshipStatus={friendshipStatus}
                            setFriendshipStatus={setFriendshipStatus}
                        />
                    )

                default:
                    // console.log("Socket in timelinepage render ==> ", socket);
                    if (socket) {
                        // console.log("Socket in timelinepage render after if socket check ==> ", socket);
                        return (
                            <TimelinePage
                                timelineUserId={profileId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                                setFriendshipStatus={setFriendshipStatus}
                                currentUser={currentUser}
                                friends={friends}
                                socket={socket}
                            />
                        )
                    }

            }
        }

    } else if (status === "loading") {
        // Fetching Authentication
        return <SpinnerWrapper />

    } else {
        // User not logged in
        return (
            <main>
                <p>Please create an account or sign in to see this page or check the url.</p>
                <Link href='/'>Create an account or sign in</Link>
            </main>
        )
    }

}