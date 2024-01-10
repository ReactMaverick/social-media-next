import styles from './postComment.module.css';
import Link from 'next/link';

export default function PostComment({ profileImgSrc, profileLink, userName, comment }) {
    return (
        <div
            className={styles.postComment}
        >
            <img
                className={styles.profilePhotoSm}
                src={profileImgSrc}
            />
            <p>
                <Link
                    className={styles.profileLink}
                    href={profileLink}
                >
                    {userName}{" "}
                </Link>
                {comment}
            </p>
        </div>
    );
};