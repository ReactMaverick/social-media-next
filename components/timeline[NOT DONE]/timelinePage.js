import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavRow from './timelineNavRow';

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
            </TimelineContainer>
        </>
    );
};