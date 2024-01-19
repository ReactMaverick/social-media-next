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
import ChatRoom from '@/components/newsfeed/chatRoom';

export default function NewsfeedMessagesPage({ currentUser }) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    const users = useSelector(selectAllUsers);

    useEffect(() => {
        dispatch(fetchAllPosts());
        dispatch(fetchAllUsers());
    }, [dispatch]);

    // console.log("Posts ===> ", posts, currentUser);

    console.log("Users ===> ", users);
    return (

        <NewsFeedPageContents>
            {currentUser &&
                (
                    <NewsFeedContainer>
                        <NewsfeedRow>
                            <NewsfeedLeftColumn>
                                <ProfileCard currentUser={currentUser} />
                                <NewsfeedNav currentUser={currentUser} />
                                {/* Chat Block (Not Done) */}
                            </NewsfeedLeftColumn>

                            <NewsfeedMiddleColumn>
                                <CreatePost currentUser={currentUser} />

                                <ChatRoom currentUser={currentUser} users={users} />

                            </NewsfeedMiddleColumn>

                            <NewsfeedRightColumn>
                                <SuggestionsSidebar>
                                    {users && (
                                        users.map(user =>
                                            user._id !== currentUser.id &&
                                            <FollowUserSuggestionItem
                                                key={user._id}
                                                imgSrc={(user.image) !== '' ? (user.image) : '../../images/no_user.webp'}
                                                followUserName={`${user.firstName} ${user.lastName}`}
                                                userTimelineLink={`/0/timeline/${user.profileId}`}
                                            />
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

// Function to calculate the time difference and return a human-readable string
const getTimeElapsed = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);

    const timeDifference = now - createdDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    // If more than 24 hours, you may want to display the actual date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return createdDate.toLocaleDateString(undefined, options);
};