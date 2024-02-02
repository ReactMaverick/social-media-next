import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';
import TimelineAboutPageContents from './timelineAboutPageContents';

export default function TimelineAboutPage({ timelineUserId, timelineUser, friendshipStatus }) {

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
                                whichPage='timelineAbout'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile
                                whichPage='timelineAbout'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}
                <TimelineAboutPageContents
                    timelineUserId={timelineUserId}
                    timelineUser={timelineUser}
                />
                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
