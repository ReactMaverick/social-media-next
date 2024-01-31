'use client'
import React, { useEffect, useState } from 'react'
import styles from './timelinePageContents.module.css';
import TimelineLeftColumn from './timelineLeftColumn';
import TimelineMiddleColumn from './timelineMiddleColumn';
import TimelineRightColumn from './timelineRightColumn';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import PhotoAlbum from './photoAlbum';

export default function TimelineAlbumPageContents() {
  const [sidebarOption, setSidebarOption] = useState('info');

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
          <PhotoAlbum />
          {/* Edit This Section */}
        </TimelineMiddleColumn>

        <TimelineRightColumn>
          {/* <RightSideBar /> */}
        </TimelineRightColumn>

      </div>
    </div>
  )
}
