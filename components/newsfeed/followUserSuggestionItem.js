import { useState, useEffect } from 'react';
import styles from './followUserSuggestionItem.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addFriend } from '@/utils/features/friendsSlice';
import { getImageBlob } from '@/utils/common';

export default function FollowUserSuggestionItem({ imgSrc, followUserName, userTimelineLink, userProfileId, currentUser, receivedRequest }) {

    const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);
    const [isFriendRequestAccepted, setIsFriendRequestAccepted] = useState(false);
    const [profileImageBlobURL, setProfileImageBlobURL] = useState(null);

    useEffect(() => {
        if (imgSrc)
            getImageBlob(imgSrc, setProfileImageBlobURL);

    }, [])

    const dispatch = useDispatch();

    const handleAddFriendRequest = async (e) => {
        e.preventDefault();

        // console.log(userProfileId);

        const data = {
            requestReceivedUserId: userProfileId
        }

        try {
            const response = await fetch('/api/1.0/users/friends/addRequest', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to sent friend request. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                setIsFriendRequestSent(true);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleAcceptFriendRequest = async (e) => {
        e.preventDefault();

        // console.log(userProfileId);

        const data = {
            requestSentUserId: userProfileId
        }

        try {
            const response = await fetch('/api/1.0/users/friends/acceptRequest', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to accept friend request. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setIsFriendRequestAccepted(true);

                // dispatch(addFriend(data))
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    return (
        <>
            {!isFriendRequestAccepted &&
                <div
                    className={styles.followUser}
                >
                    <img
                        className={`${styles.profilePhotoSm} ${styles.pullLeft}`}
                        src={profileImageBlobURL}
                        loading='lazy'
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
                        {isFriendRequestSent ?
                            <Link
                                className={styles.textGreen}
                                href=""
                                onClick={handleAddFriendRequest}
                            >
                                Request sent
                            </Link> : (
                                receivedRequest && !isFriendRequestAccepted ?
                                    <Link
                                        className={styles.textGreen}
                                        href=""
                                        onClick={handleAcceptFriendRequest}
                                    >
                                        Confirm friend
                                    </Link> :
                                    <Link
                                        className={styles.textGreen}
                                        href=""
                                        onClick={handleAddFriendRequest}
                                    >
                                        Add friend
                                    </Link>
                            )

                        }

                    </div>
                </div>
            }
        </>

    )
}
