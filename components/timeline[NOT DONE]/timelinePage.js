import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavRow from './timelineNavRow';
import TimelinePageContents from './timelinePageContents';


export default function TimelinePage() {
    return (
        <>
            <TimelineContainer>
                <Timeline>
                    <TimelineCover>
                        <TimelineNav>
                            <TimelineNavRow />
                        </TimelineNav>
                    </TimelineCover>
                </Timeline>
                <TimelinePageContents/>
            </TimelineContainer>
        </>
    );
};
