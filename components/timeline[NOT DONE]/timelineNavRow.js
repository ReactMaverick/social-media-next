import styles from './timelineNavRow.module.css';

export default function TimelineNavRow() {
    return (
        <div className={`${styles.row} row`}>
            <div className={`col-md-3 ${styles.profileCol}`}>
                <div className={styles.profileInfo}>
                    <img
                        className={`${styles.imgResponsive} profile-photo`}
                        src="https://themified.com/friend-finder/images/users/user-1.jpg"
                        alt="Profile"
                    />
                    <h3>Sarah Cruiz</h3>
                    <p className={styles.textMuted}>Creative Director</p>
                </div>
            </div>
            <div className={`col-md-9 ${styles.timelineCol}`}>
                <ul className={`${styles.profileMenu} ${styles.listInline}`}>
                    <li>
                        <a className="active" href="https://themified.com/friend-finder/timeline.html">
                            Timeline
                        </a>
                    </li>
                    <li>
                        <a href="https://themified.com/friend-finder/timeline-about.html">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="https://themified.com/friend-finder/timeline-album.html">
                            Album
                        </a>
                    </li>
                    <li>
                        <a href="https://themified.com/friend-finder/timeline-friends.html">
                            Friends
                        </a>
                    </li>
                </ul>
                <ul className={`${styles.followMe} ${styles.listInline}`}>
                    <li>1,299 people following her</li>
                    <li>
                        <button className="btn-primary">Add Friend</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}


