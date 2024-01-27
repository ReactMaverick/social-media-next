import styles from './friendColumn.module.css';
import Link from 'next/link';

export default function FriendColumn({ friendName, friendImg, friendCoverImg }) {
    return (
        <div className={`${styles.friendColumn} col-md-6 col-sm-6`}>
            <div className={`${styles.friendCard}`}>
                <img
                    className={`${styles.imgResponsive} img-responsive cover`}
                    alt="profile-cover"
                    src={friendCoverImg}
                />

                <div
                    className={styles.cardInfo}
                >
                    <img
                        className={styles.profilePhotoLg}
                        alt="user"
                        src={friendImg}
                    />
                    <div className="friend-info">
                        <Link
                            className={`pull-right text-green ${styles.pullRight} ${styles.textGreen} ${styles.link}`}
                            href="https://themified.com/friend-finder/newsfeed-friends.html#"
                        >
                            My Friend
                        </Link>
                        <h5
                            className={styles.h5}
                        >
                            <Link
                                className={`profile-link ${styles.profileLink} ${styles.link}`}
                                href="https://themified.com/friend-finder/timeline.html"
                            >
                                {friendName}
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
