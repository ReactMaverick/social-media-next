import styles from './timelineNavRowMobile.module.css';
import Link from 'next/link';

export default function TimelineNavRowMobile({ whichPage, timelineUser }) {
    return (
        <>
            <div
                className="profile-info"
            >
                <img
                    className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                    src={process.env.BASE_URL + '/images/user_1_image.jpg'}
                />
                <h4
                    className={styles.h4}
                >
                    Sarah Cruiz
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
                            href={"/0/timeline/" + timelineUser}
                            className={whichPage == 'timeline' ? styles.active : ''}
                        >
                            Timeline
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            className={whichPage == 'timelineEdit' ? styles.active : ''}
                            href={"/0/timeline/" + timelineUser + "/about"}

                        >
                            About
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            href={"/0/timeline/" + timelineUser + "/album"}
                            className={whichPage == 'timelineAlbum' ? styles.active : ''}
                        >
                            Album
                        </Link>
                    </li>
                    <li

                    >
                        <Link
                            href={"/0/timeline/" + timelineUser + "/friends"}
                            className={whichPage == 'timelineFriends' ? styles.active : ''}
                        >
                            Friends
                        </Link>
                    </li>
                </ul>
                <button
                    className={`btn-primary ${styles.btnPrimary}`}
                >
                    Add Friend
                </button>
            </div>
        </>
    );
}
