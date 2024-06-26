'use client'
import React, { useEffect, useState } from 'react'
import styles from './timelinePageContents.module.css';
import TimelineLeftColumn from './timelineLeftColumn';
import TimelineMiddleColumn from './timelineMiddleColumn';
import TimelineRightColumn from './timelineRightColumn';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import EditProfile from './editProfile';


export default function TimelineEditPageContents({ timelineUserId, timelineUser }) {
  const [sidebarOption, setSidebarOption] = useState('info');

  useEffect(() => {
    // console.log("Sidebar Option ==> ", sidebarOption);
  }, [sidebarOption]);

  return (
    <div className={styles.timelineContents}>
      <div className={`row`}>
        <TimelineLeftColumn>
          <LeftSideBar
            setSidebarOption={setSidebarOption}
            sidebarOption={sidebarOption}
          />
        </TimelineLeftColumn>

        <TimelineMiddleColumn>
          <EditProfile
            option={sidebarOption}
            timelineUserId={timelineUserId}
            timelineUser={timelineUser}
          />
        </TimelineMiddleColumn>

        <TimelineRightColumn>
          {/* <RightSideBar /> */}
        </TimelineRightColumn>

      </div>
    </div>
  )
}
