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

export default function NewsfeedPage({ currentUser }) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch]);

    console.log("Posts ===> ", posts);
    return (
        <NewsFeedPageContents>
            <NewsFeedContainer>
                <NewsfeedRow>
                    <NewsfeedLeftColumn>
                        <ProfileCard />
                        <NewsfeedNav />
                        {/* Chat Block (Not Done) */}
                    </NewsfeedLeftColumn>

                    <NewsfeedMiddleColumn>
                        <CreatePost currentUser={currentUser} />

                        {/* Image Post */}
                        {/* <PostContent
                            postImgSrc='../../images/post_image_1.jpg'
                            postUserImgSrc='../../images/user_5_image.jpg'
                            postUserTimelineLink='/0/user/userId/timeline'
                            postedUserName='Alexis Clark'
                            updateStatusText='Published a photo about 3 minutes ago'
                            likes='13'
                            dislikes='0'
                            postCaption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 😧😧😧'
                            currentUserImgSrc='../../images/user_1_image.jpg'
                        >
                            <PostComment
                                profileImgSrc='../../images/user_11_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Diana'
                                comment='😆 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dosmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
                            />
                            <PostComment
                                profileImgSrc='../../images/user_4_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='John'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud'
                            />
                        </PostContent> */}

                        {/* Video Post */}
                        {/* <PostContent
                            postVideSrc='../../videos/video_8.mp4'
                            postUserImgSrc='../../images/user_3_image.jpg'
                            postUserTimelineLink='/0/user/userId/timeline'
                            postedUserName='Sophia Lee'
                            updateStatusText='Updated her status about 33 mins ago'
                            likes='75'
                            dislikes='8'
                            postCaption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                            currentUserImgSrc='../../images/user_1_image.jpg'
                        >
                            <PostComment
                                profileImgSrc='../../images/user_14_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Olivia'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 😧 Ut enim ad minim veniam, quis nostrud'
                            />
                            <PostComment
                                profileImgSrc='../../images/user_1_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Sarah'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                            />
                            <PostComment
                                profileImgSrc='../../images/user_2_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Linda'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </PostContent> */}

                        {/* Normal Post */}
                        <PostContent
                            postUserImgSrc='../../images/user_2_image.jpg'
                            postUserTimelineLink='/0/user/userId/timeline'
                            postedUserName='Linda Lohan'
                            updateStatusText='Published a photo about 1 hour ago'
                            likes='23'
                            dislikes='4'
                            postCaption='👍👍 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            currentUserImgSrc='../../images/user_1_image.jpg'
                        >
                            <PostComment
                                profileImgSrc='../../images/user_12_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Cris'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 💪'
                            />
                        </PostContent>

                        {/* Image Post */}
                        {/* <PostContent
                            postImgSrc='../../images/post_image_2.jpg'
                            postUserImgSrc='../../images/user_4_image.jpg'
                            postUserTimelineLink='/0/user/userId/timeline'
                            postedUserName='John Doe'
                            updateStatusText='Published a photo about 2 hour ago'
                            likes='39'
                            dislikes='2'
                            postCaption='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
                            currentUserImgSrc='../../images/user_1_image.jpg'
                        >
                            <PostComment
                                profileImgSrc='../../images/user_13_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Brian'
                                comment='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                            />
                            <PostComment
                                profileImgSrc='../../images/user_8_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Richard'
                                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </PostContent> */}

                        {/* Image Post */}
                        {/* <PostContent
                            postImgSrc='../../images/post_image_3.jpg'
                            postUserImgSrc='../../images/user_9_image.jpg'
                            postUserTimelineLink='/0/user/userId/timeline'
                            postedUserName='Anna Young'
                            updateStatusText='Published a photo about 4 hour ago'
                            likes='2'
                            dislikes='0'
                            postCaption='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
                            currentUserImgSrc='../../images/user_1_image.jpg'
                        >
                            <PostComment
                                profileImgSrc='../../images/user_10_image.jpg'
                                profileLink='/0/users/userId/timeline'
                                userName='Julia'
                                comment='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                            />
                        </PostContent> */}

                        {posts.map((post) =>
                            <PostContent
                                postImgSrc={post.image}
                                postUserImgSrc='../../images/user_9_image.jpg'
                                postUserTimelineLink='/0/user/userId/timeline'
                                postedUserName='Anna Young'
                                updateStatusText={post.createdAt}
                                likes={post.likes.length}
                                dislikes={post.dislikes.length}
                                postCaption={post.caption}
                                currentUserImgSrc='../../images/user_1_image.jpg'
                            >
                            </PostContent>
                        )}

                    </NewsfeedMiddleColumn>

                    <NewsfeedRightColumn>
                        <SuggestionsSidebar>
                            <FollowUserSuggestionItem
                                imgSrc='../../images/user_11_image.jpg'
                                followUserName='Diane Amber'
                                userTimelineLink='/0/users/userId/timeline'
                            />
                            <FollowUserSuggestionItem
                                imgSrc='../../images/user_12_image.jpg'
                                followUserName='Cris Haris'
                                userTimelineLink='/0/users/userId/timeline'
                            />
                            <FollowUserSuggestionItem
                                imgSrc='../../images/user_13_image.jpg'
                                followUserName='Brian Walton'
                                userTimelineLink='/0/users/userId/timeline'
                            />
                            <FollowUserSuggestionItem
                                imgSrc='../../images/user_14_image.jpg'
                                followUserName='Olivia Steward'
                                userTimelineLink='/0/users/userId/timeline'
                            />
                            <FollowUserSuggestionItem
                                imgSrc='../../images/user_15_image.jpg'
                                followUserName='Sophia Page'
                                userTimelineLink='/0/users/userId/timeline'
                            />
                        </SuggestionsSidebar>
                    </NewsfeedRightColumn>
                </NewsfeedRow>
            </NewsFeedContainer>
        </NewsFeedPageContents>
    );
};