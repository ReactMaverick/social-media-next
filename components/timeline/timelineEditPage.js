import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';
import TimelineEditPageContents from './timelineEditPageContents';


export default function TimelineEditPage({ timelineUserId, timelineUser, friendshipStatus, currentUser }) {
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
                        <TimelineNav>
                            <TimelineNavRow
                                whichPage='timelineEdit'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile
                                whichPage='timelineEdit'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}
                <TimelineEditPageContents
                />
                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
