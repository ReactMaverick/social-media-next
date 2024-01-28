import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';
import TimelineEditPageContents from './timelineEditPageContents';


export default function TimelineEditPage({ timelineUser }) {
    return (
        <>
            <TimelineContainer>
                <Timeline>
                    <TimelineCover>
                        {/* For Large Screens */}
                        <TimelineNav>
                            <TimelineNavRow whichPage='timelineEdit' timelineUser={timelineUser} />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile whichPage='timelineEdit' timelineUser={timelineUser} />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}
                <TimelineEditPageContents />
                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
