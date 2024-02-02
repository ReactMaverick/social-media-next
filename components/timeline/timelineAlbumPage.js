import TimelineContainer from './timelineContainer';
import Timeline from './timeline';
import TimelineCover from "./timelineCover";
import TimelineNav from './timelineNav';
import TimelineNavMobile from './timelineNavMobile';
import TimelineNavRow from './timelineNavRow';
import TimelineNavRowMobile from './timelineNavRowMobile';
import TimelineAlbumPageContents from './timelineAlbumPageContents';
import { useEffect, useState } from 'react';
import PhotoModal from './photoModal';

export default function TimelineAlbumPage({ timelineUserId, timelineUser, friendshipStatus, posts }) {

    const [isImageClicked, setIsImageClicked] = useState(false);
    const [imageSource, setImageSource] = useState(null);

    useEffect(() => {

    }, [isImageClicked, imageSource])

    return (
        <>
            <TimelineContainer>
                {isImageClicked ?
                    <PhotoModal
                        imgSrc={imageSource}
                        setIsImageClicked={setIsImageClicked}
                    /> : ''
                }
                <Timeline>
                    <TimelineCover
                        timelineUserId={timelineUserId}
                        timelineUser={timelineUser}
                        friendshipStatus={friendshipStatus}
                    >
                        {/* For Large Screens */}
                        <TimelineNav>
                            <TimelineNavRow
                                whichPage='timelineAlbum'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNav>
                        {/* For Large Screens */}
                        {/* For Small Screens */}
                        <TimelineNavMobile>
                            <TimelineNavRowMobile
                                whichPage='timelineAlbum'
                                timelineUserId={timelineUserId}
                                timelineUser={timelineUser}
                                friendshipStatus={friendshipStatus}
                            />
                        </TimelineNavMobile>
                        {/* For Small Screens */}
                    </TimelineCover>
                </Timeline>
                {/* Page Contents */}
                <TimelineAlbumPageContents
                    timelineUser={timelineUser}
                    posts={posts}
                    setIsImageClicked={setIsImageClicked}
                    setImageSource={setImageSource}
                />
                {/* Page Contents */}
            </TimelineContainer>
        </>
    );
};
