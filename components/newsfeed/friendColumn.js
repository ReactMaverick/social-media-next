import styles from './friendColumn.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getImageBlob } from '@/utils/common';

export default function FriendColumn({ friendName, friendImg, friendCoverImg, friendProfileId }) {

    const [friendImageBlobURL, setFriendImageBlobURL] = useState(null);
    const [isFriendImageLoading, setIsFriendImageLoading] = useState(true);
    const [friendCoverImageBlobURL, setFriendCoverImageBlobURL] = useState(null);
    const [isFriendCoverImageLoading, setIsFriendCoverImageLoading] = useState(true);

    useEffect(() => {
        if (friendImg) {
            getImageBlob(friendImg, setFriendImageBlobURL)
                .then(() => {
                    setIsFriendImageLoading(false)
                });
        } else {
            setFriendImageBlobURL('/images/no_user.webp');
            setIsFriendImageLoading(false);

        }

        if (friendCoverImg) {
            getImageBlob(friendCoverImg, setFriendCoverImageBlobURL)
                .then(() => {
                    setIsFriendCoverImageLoading(false)
                });
        } else {
            setFriendCoverImageBlobURL('/images/image_not_found.jpg');
            setIsFriendCoverImageLoading(false);
        }
    }, [])

    return (
        <div className={`${styles.friendColumn} col-md-6 col-sm-6`}>
            <div className={`${styles.friendCard}`}>
                {isFriendCoverImageLoading ?
                    <img
                        className={`${styles.imgResponsive} img-responsive cover`}
                        alt="profile-cover"
                        src={process.env.BASE_URL + '/images/imageLoader.gif'}
                        loading='lazy'
                    /> :
                    <img
                        className={`${styles.imgResponsive} img-responsive cover`}
                        alt="profile-cover"
                        src={friendCoverImageBlobURL}
                        loading='lazy'
                    />
                }

                <div
                    className={styles.cardInfo}
                >
                    {isFriendImageLoading ?
                        <img
                            className={styles.profilePhotoLg}
                            alt="user"
                            src={process.env.BASE_URL + '/images/imageLoader.gif'}
                            loading='lazy'
                        /> :
                        <img
                            className={styles.profilePhotoLg}
                            alt="user"
                            src={friendImageBlobURL}
                            loading='lazy'
                        />
                    }

                    <div className="friend-info">
                        <Link
                            className={`pull-right text-green ${styles.pullRight} ${styles.textGreen} ${styles.link}`}
                            href=''
                        >
                            My Friend
                        </Link>
                        <h5
                            className={styles.h5}
                        >
                            <Link
                                className={`profile-link ${styles.profileLink} ${styles.link}`}
                                href={`/0/timeline/${friendProfileId}`}
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
