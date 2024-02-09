import styles from './profileCard.module.css';
import Link from "next/link";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getImageBlob } from '@/utils/common';

export default function ProfileCard({ currentUser, friends }) {

    const [currentUserImageBlobUrl, setCurrentUserImageBlobUrl] = useState(null);
    const [isCurrentUserImageLoading, setIsCurrentUserImageLoading] = useState(true);
    const [currentUserCoverImageBlobUrl, setCurrentUserCoverImageBlobUrl] = useState(null);
    const [isCurrentUserCoverImageLoading, setIsCurrentUserCoverImageLoading] = useState(true);

    useEffect(() => {
        if (currentUser.image !== '') {
            getImageBlob(currentUser.image, setCurrentUserImageBlobUrl)
                .then(() => {
                    // console.log('image loaded', currentUserImageBlobUrl);
                    setIsCurrentUserImageLoading(false);
                });
        } else {
            setCurrentUserImageBlobUrl('/images/image_not_found.jpg');
            setIsCurrentUserImageLoading(false);

        }

        if (currentUser.coverImage !== '') {
            getImageBlob(currentUser.coverImage, setCurrentUserCoverImageBlobUrl)
                .then(() => {
                    // console.log('cover image loaded', currentUserCoverImageBlobUrl);
                    setIsCurrentUserCoverImageLoading(false);
                });
        } else {
            setCurrentUserCoverImageBlobUrl('/images/image_not_found.jpg');
            setIsCurrentUserCoverImageLoading(false);
        }

    }, [])

    const router = useRouter();

    const handleProfileImageClick = () => {
        router.push('/0/timeline/' + currentUser.profileId);
    }

    return (

        <div
            className={styles.profileCard}
            style={{
                background: `${isCurrentUserCoverImageLoading ? `linear-gradient(to bottom, rgba(39, 170, 225, .8), rgba(28, 117, 188, .8)), url("${process.env.BASE_URL + `/images/imageLoader.gif`}") no-repeat` : `linear-gradient(to bottom, rgba(39, 170, 225, .8), rgba(28, 117, 188, .8)), url("${currentUserCoverImageBlobUrl}") no-repeat`}`
            }}
        >
            {currentUser && (
                <>
                    {/* {console.log("Current user image", currentUserImageBlobUrl)} */}
                    {isCurrentUserImageLoading ?
                        <img
                            className={styles.profilePhoto}
                            alt="user"
                            src={process.env.BASE_URL + '/images/imageLoader.gif'}
                            loading='lazy'
                        /> :
                        <img
                            className={styles.profilePhoto}
                            alt="user"
                            src={(currentUser.image) !== '' ? (currentUserImageBlobUrl) : '/images/no_user.webp'}
                            loading='lazy'
                            onClick={handleProfileImageClick}
                        />
                    }

                    <h5
                    >
                        <Link
                            className={styles.textWhite}
                            href={'/0/timeline/' + currentUser.profileId}

                        >
                            {currentUser.firstName + ' ' + currentUser.lastName}
                        </Link>
                    </h5>
                    <Link
                        className={styles.textWhite}
                        href=""
                        onClick={(e) => e.preventDefault()}
                    >
                        <Icon className="icon" icon="ion:person-add" />{" "}
                        {friends && friends.length} friends
                    </Link>
                </>
            )}

        </div>

    );
}
