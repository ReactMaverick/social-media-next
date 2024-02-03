import React from 'react'
import styles from "./rightSideBar.module.css";
import Link from "next/link";

export default function rightSideBar() {
  return (
    <div className={styles.stickyBar}>
      <h4 className={styles.heading}>Sarah's activity</h4>
      <div className={styles.feedItem}>
        <div className={styles.liveActivity}>
          <p><Link href="" className={styles.profileLink}>Sarah</Link>Commended on a Photo</p>
          <p className={styles.textMuted}>5 mins ago</p>
        </div>
      </div>
      <div className={styles.feedItem}>
        <div className={styles.liveActivity}>
          <p><Link href="" className={styles.profileLink}>Sarah</Link> Has posted a photo</p>
          <p className={styles.textMuted}>an hour ago</p>
        </div>
      </div>
      <div className={styles.feedItem}>
        <div className={styles.liveActivity}>
          <p><Link href="" className={styles.profileLink}>Sarah</Link> Liked her friend's post</p>
          <p className={styles.textMuted}>4 hours ago</p>
        </div>
      </div>
      <div className={styles.feedItem}>
        <div className={styles.liveActivity}>
          <p><Link href="" className={styles.profileLink}>Sarah</Link> has shared an album</p>
          <p className={styles.textMuted}>a day ago</p>
        </div>
      </div>
    </div>
  )
}
