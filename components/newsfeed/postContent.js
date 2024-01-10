import styles from './postContent.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';


export default function PostContent({ children, postImgSrc, postVideSrc, postUserImgSrc, postUserTimelineLink, postedUserName, updateStatusText, likes, dislikes, postCaption, currentUserImgSrc }) {
    return (
        <div
            className={styles.postContent}
        >
            {postImgSrc ? (
                <img
                    className={styles.postImage}
                    alt="post-image"
                    src={postImgSrc}
                />
            ) : (postVideSrc && (
                <div className={styles.videoWrapper}>
                    <video className={styles.postVideo} controls>
                        <source src={postVideSrc} type="video/mp4" />
                    </video>
                </div>
            ))}

            <div
                className={styles.postContainer}
            >
                <img
                    className={`${styles.profilePhotoMd} ${styles.pullLeft}`}
                    alt="user"
                    src={postUserImgSrc}
                />
                <div
                    className={styles.postDetail}
                >
                    <div className="user-info">
                        <h5
                            className={styles.h5}
                        >
                            <Link
                                className={styles.profileLink}
                                href={postUserTimelineLink}
                            >
                                {postedUserName}
                            </Link>{" "}
                            <span
                                className={styles.following}
                            >
                                following
                            </span>
                        </h5>
                        <p
                            className={`${styles.textMuted} text-muted`}
                        >
                            {updateStatusText}
                        </p>
                    </div>
                    <div
                        className={styles.reaction}
                    >
                        <Link
                            className={`${styles.btn} ${styles.textGreen}`}
                            href="#"
                        >
                            <Icon icon="f7:hand-thumbsup-fill" />{" "}
                            {likes}
                        </Link>
                        <Link
                            className={`${styles.btn} ${styles.textRed}`}
                            href="#"
                        >
                            <Icon icon="f7:hand-thumbsdown-fill" />{" "}
                            {dislikes}
                        </Link>
                    </div>
                    <div
                        className={styles.lineDivider}
                    />
                    <div
                        className={styles.postText}
                    >
                        <p>
                            {postCaption}
                        </p>
                    </div>
                    <div
                        className={styles.lineDivider}
                    />
                    {children}
                    <div
                        className={styles.postComment}
                    >
                        <img
                            className={styles.profilePhotoSm}
                            src={currentUserImgSrc}
                        />
                        <input
                            className={styles.formControl}
                            type="text"
                            placeholder="Post a comment"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
