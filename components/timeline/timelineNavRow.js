import styles from './timelineNavRow.module.css';
import Link from 'next/link';

export default function TimelineNavRow({ whichPage }) {
    // console.log(whichPage);
    return (
        <div className={`${styles.row} row`}>
            <div className={`col-md-3 ${styles.profileCol}`}>
                <div className={styles.profileInfo}>
                    <img
                        className={`${styles.imgResponsive} profile-photo`}
                        src={process.env.BASE_URL + '/images/user_1_image.jpg'}
                        alt="Profile"
                    />
                    <h3>Sarah Cruiz</h3>
                </div>
            </div>
            <div className={`col-md-9 ${styles.timelineCol}`}>
                <ul className={`${styles.profileMenu} ${styles.listInline}`}>
                    <li>
                        <Link className={whichPage == 'timeline' ? styles.active : ''} href="/0/timeline">
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineEdit' ? styles.active : ''} href="/0/timeline/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineAlbum' ? styles.active : ''} href="/0/timeline/album">
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineFriends' ? styles.active : ''} href="/0/timeline/friends">
                            Friends
                        </Link>
                    </li>
                </ul>
                <ul className={`${styles.followMe} ${styles.listInline}`}>
                    <li>1,299 people following her</li>
                    <li>
                        <button className={`${styles.btnPrimary}`}>Add Friend</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}


