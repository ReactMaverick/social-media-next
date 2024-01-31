'use client'
import React, { useEffect, useState } from 'react'
import styles from './timelinePageContents.module.css';
import TimelineLeftColumn from './timelineLeftColumn';
import TimelineMiddleColumn from './timelineMiddleColumn';
import TimelineRightColumn from './timelineRightColumn';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFriends, addFriend, removeFriend, selectFriends, selectSentFriendRequests, selectReceivedFriendRequests, fetchSentFriendRequests, fetchReceivedFriendRequests } from '@/utils/features/friendsSlice';
import FriendList from "../newsfeed/friendList";
import FriendColumn from "../newsfeed/friendColumn";

export default function TimelineFriendsPageContents() {
  const [sidebarOption, setSidebarOption] = useState('info');

  const dispatch = useDispatch();

  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchAllFriends());
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
          {/* Friends Section */}
          <FriendList>
            {friends.map((friend) =>
              <FriendColumn
                key={friend.friend._id}
                friendProfileId={friend.friend.profileId}
                friendName={`${friend.friend.firstName} ${friend.friend.lastName}`}
                friendImg={(friend.friend.image) !== '' ? (friend.friend.image) : '../../images/no_user.webp'}
                friendCoverImg={(friend.friend.coverImage) !== '' ? (friend.friend.coverImage) : `/images/profile_card_cover.jpg`}
              />
            )}
          </FriendList>
          {/* Friends Section */}
          {/* Edit This Section */}
        </TimelineMiddleColumn>

        <TimelineRightColumn>
          {/* <RightSideBar /> */}
        </TimelineRightColumn>

      </div>
    </div>
  )
}
