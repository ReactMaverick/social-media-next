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
import NewsfeedRightColumn from './newsfeedRightColumn';
import SuggestionsSidebar from './suggestionsSidebar';
import FollowUserSuggestionItem from './followUserSuggestionItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, selectPosts } from '@/utils/features/postContentsSlice';
import { fetchAllUsers, selectAllUsers } from "@/utils/features/userSlice";
import { fetchAllFriends, addFriend, removeFriend, selectFriends, selectSentFriendRequests, selectReceivedFriendRequests, fetchSentFriendRequests, fetchReceivedFriendRequests } from '@/utils/features/friendsSlice';
import MediaContainer from './mediaContainer';
import NewsfeedImagePost from './newsfeedImagePost';

export default function NewsfeedImagesPage({ currentUser }) {
    const dispatch = useDispatch();
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

    // console.log("Posts ===> ", posts);

    // console.log("Users ===> ", users);

    // console.log("All Friends ===> ", friends);

    // console.log("Sent Friend Requests ===> ", sentFriendRequests);

    // console.log("Received Friend Requests ===> ", receivedFriendRequests);

    return (

        <NewsFeedPageContents>
            {currentUser &&
                (
                    <NewsFeedContainer>
                        <NewsfeedRow>
                            <NewsfeedLeftColumn>
                                <ProfileCard currentUser={currentUser} friends={friends} />
                                <NewsfeedNav currentUser={currentUser} />
                                {/* Chat Block (Not Done) */}
                            </NewsfeedLeftColumn>

                            <NewsfeedMiddleColumn>
                                <CreatePost currentUser={currentUser} />

                                {/* Images Section */}
                                <MediaContainer>
                                    <NewsfeedImagePost />
                                </MediaContainer>
                                {/* Images Section */}

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
