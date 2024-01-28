import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';


export default function TimelinePage({ timelineUser }) {
    return (
        <>
            <TimelineContainer>
                <Timeline>
                    <TimelineCover>
                        {/* For Large Screens */}
                        <TimelineNav>
                            <TimelineNavRow whichPage='timeline' timelineUser={timelineUser} />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile whichPage='timeline' timelineUser={timelineUser} />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}

                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
