import styles from './timelineNavRowMobile.module.css';
import Link from 'next/link';

export default function TimelineNavRowMobile({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {

    // console.log("Timeline User ===> ", timelineUser);
    return (
        <>
            <div
                className="profile-info"
            >
                <img
                    className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                    src={process.env.BASE_URL + timelineUser.image}
                />
                <h4
                    className={styles.h4}
                >
                    {timelineUser.firstName + ' ' + timelineUser.lastName}
                </h4>
            </div>

            <div
                className="mobile-menu"
            >
                <ul
                    className={`list-inline ${styles.listInline}`}
                >
                    <li
                    >
                        <Link
                            href={"/0/timeline/" + timelineUserId}
                            className={whichPage == 'timeline' ? styles.active : ''}
                        >
                            Timeline
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            className={whichPage == 'timelineEdit' ? styles.active : ''}
                            href={"/0/timeline/" + timelineUserId + "/about"}

                        >
                            About
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            href={"/0/timeline/" + timelineUserId + "/album"}
                            className={whichPage == 'timelineAlbum' ? styles.active : ''}
                        >
                            Album
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            href={"/0/timeline/" + timelineUserId + "/friends"}
                            className={whichPage == 'timelineFriends' ? styles.active : ''}
                        >
                            Friends
                        </Link>
                    </li>
                </ul>
                {friendshipStatus == 'friend' ?
                    <button className={`${styles.btnPrimary}`}>Friend</button> :
                    <button className={`${styles.btnPrimary}`}>Add Friend</button>
                }
            </div>
        </>
    );
}
