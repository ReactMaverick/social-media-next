import styles from './followUserSuggestionItem.module.css';
import Link from 'next/link';

export default function FollowUserSuggestionItem({ imgSrc, followUserName, userTimelineLink }) {

    const handleAddFriendRequest = (e) => {
        e.preventDefault();


    };

    return (
        <div
            className={styles.followUser}
        >
            <img
                className={`${styles.profilePhotoSm} ${styles.pullLeft}`}
                src={imgSrc}
            />
            <div
            >
                <h5
                    className={styles.h5}
                >
                    <Link
                        href={userTimelineLink}
                    >
                        {followUserName}
                    </Link>
                </h5>
                <Link
                    className={styles.textGreen}
                    href=""
                    onClick={handleAddFriendRequest}
                >
                    Add friend
                </Link>
            </div>
        </div>
    )
}
