'use client'
import React from 'react'
import styles from './timelinePageContents.module.css';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import EditProfile from './editProfile';


export default function TimelinePageContents() {
  return (
    <div className={styles.timelineContents}>
<div className={`row`}>
<div className={`col-md-3`}>
<LeftSideBar/>
</div>
<div className={`col-md-7`}>
<EditProfile/>
</div>
<div className={`col-md-2`}>
<RightSideBar/>
</div>
</div>
    </div>
  )
}
