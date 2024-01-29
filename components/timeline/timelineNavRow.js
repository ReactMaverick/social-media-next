import styles from './timelineNavRow.module.css';
import Link from 'next/link';

export default function TimelineNavRow({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {
    // console.log(whichPage);
    return (
        <div className={`${styles.row} row`}>
            <div className={`col-md-3 ${styles.profileCol}`}>
                <div className={styles.profileInfo}>
                    <img
                        className={`${styles.imgResponsive} profile-photo`}
                        src={process.env.BASE_URL + timelineUser.image}
                        alt="Profile"
                    />
                    {friendshipStatus == 'currentUser' ?
                        <h3>{timelineUser.name}</h3> :
                        <h3>{timelineUser.firstName + ' ' + timelineUser.lastName}</h3>
                    }

                </div>
            </div>
            <div className={`col-md-9 ${styles.timelineCol}`}>
                <ul className={`${styles.profileMenu} ${styles.listInline}`}>
                    <li>
                        <Link className={whichPage == 'timeline' ? styles.active : ''} href={"/0/timeline/" + timelineUserId}>
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineEdit' ? styles.active : ''} href={"/0/timeline/" + timelineUserId + "/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineAlbum' ? styles.active : ''} href={"/0/timeline/" + timelineUserId + "/album"}>
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link className={whichPage == 'timelineFriends' ? styles.active : ''} href={"/0/timeline/" + timelineUserId + "/friends"}>
                            Friends
                        </Link>
                    </li>
                </ul>
                <ul className={`${styles.followMe} ${styles.listInline}`}>
                    <li>
                        {friendshipStatus == 'friend' || friendshipStatus == 'currentUser' ?
                            <button className={`${styles.btnPrimary}`}>Friend</button> :
                            <button className={`${styles.btnPrimary}`}>Add Friend</button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}


