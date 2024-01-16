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

export default function NewsfeedPage({ currentUser }) {
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

                                {posts.map((post) =>
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
                                        {(post.comments.length > 0) && post.comments.map((comment) =>
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
                                            />
                                        )}
                                    </PostContent>
                                )}

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