import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';
import TimelinePageContents from './timelinePageContents';
import { useEffect } from 'react';


export default function TimelinePage({ timelineUserId, timelineUser, friendshipStatus, setFriendshipStatus, currentUser }) {

    useEffect(() => {
        // console.log("Timeline User ===> ", timelineUser, friendshipStatus);
    }, [timelineUser, friendshipStatus, setFriendshipStatus])

    return (
        <>
            <TimelineContainer>
                <Timeline>
                    <TimelineCover
                        timelineUserId={timelineUserId}
                        timelineUser={timelineUser}
                        friendshipStatus={friendshipStatus}
                    >
                        {/* For Large Screens */}
                        <TimelineNav
                        >
                            <TimelineNavRow
                                whichPage='timeline'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                                setFriendshipStatus={setFriendshipStatus}
                            />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile
                                whichPage='timeline'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                                setFriendshipStatus={setFriendshipStatus}
                            />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}
                <TimelinePageContents
                    timelineUser={timelineUser}
                    currentUser={currentUser}
                />
                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
