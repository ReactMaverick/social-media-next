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

export default function Timeline({ params }) {
    // console.log(params);

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

    useEffect(() => {
        dispatch(fetchAllPosts());
        dispatch(fetchAllUsers());
        dispatch(fetchAllFriends());
        dispatch(fetchSentFriendRequests());
        dispatch(fetchReceivedFriendRequests());
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

    const { data: session, status } = useSession()

    // console.log(session, status);

    useEffect(() => {
        if (session?.user) {
            // Dispatch action to set current user in Redux store
            // console.log(session.user);
            users?.forEach((user) => {
                if (user._id === session.user.id)
                    dispatch(setCurrentUser(user));
            })

        }

        // Redirect to the desired page
        // router.push('/profile');
    }, [dispatch, session, users]);

    if (status === "authenticated" && timelineUser && friendshipStatus) {
        // Authenticated User
        // console.log(timelineUser);
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
                return (
                    <TimelinePage
                        timelineUserId={profileId}
                        timelineUser={timelineUser}
                        friendshipStatus={friendshipStatus}
                        setFriendshipStatus={setFriendshipStatus}
                        currentUser={currentUser}
                    />
                )
        }
    } else if (status === "loading") {
        // Fetching Authentication
        return (
            <main>
                <p>Please wait....</p>
            </main>
        )

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