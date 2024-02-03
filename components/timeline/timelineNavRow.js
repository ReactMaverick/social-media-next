import styles from './timelineNavRow.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';
import { useRouter } from 'next/navigation';
import { addFriend } from '@/utils/features/friendsSlice';

export default function TimelineNavRow({ whichPage, timelineUserId, timelineUser, friendshipStatus, setFriendshipStatus }) {
    // console.log(whichPage);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const [selectedProfileImage, setSelectedProfileImage] = useState(timelineUser.image);
    const [isFriendRequestAccepted, setIsFriendRequestAccepted] = useState(false);
    const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);
    const [isFriend, setIsFriend] = useState(true);
    const [isFriendButtonHovered, setIsFriendButtonHovered] = useState(false);
    const [isRemoveFriendHovered, setIsRemoveFriendHovered] = useState(false);

    useEffect(() => {

    }, [isFriendRequestSent, isFriendRequestAccepted])

    useEffect(() => {
        // console.log("Timeline user image in nav ===> ", timelineUser.image);

        setSelectedProfileImage(timelineUser.image);
    }, [timelineUser]);

    useEffect(() => {
        // console.log("Selected Image ===> ", selectedProfileImage);
        const profileImageChange = async () => {
            if (typeof (selectedProfileImage) == 'object') {
                try {
                    // Dispatch the addComment action
                    dispatch(updateProfilePictureUser({ selectedProfileImage }))
                        .then((action) => {
                            // Handle success if needed
                            // console.log('Profile Picture Updated Successfully!', action);
                        })
                        .catch((error) => {
                            // Handle error if needed
                            console.error('Error Updating picture:', error);
                        });
                } catch (error) {
                    console.error(error);
                }
            }
        }

        profileImageChange();


    }, [selectedProfileImage])

    const handleProfileImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        if (typeof (selectedProfileImage) == 'object')
            URL.revokeObjectURL(URL.createObjectURL(selectedProfileImage));

        setSelectedProfileImage(file); //Set the selected file in selectedProfileImage

    };

    const handleProfileImageLinkClick = (e) => {
        e.stopPropagation();

        // console.log($("#profileImageInput"));

        $("#profileImageInput").click();
        // console.log(selectedProfileImage);
    };

    const handleProfileImageInputClick = (e) => {
        e.stopPropagation();
    };

    const handleTimelineColClick = (e) => {
        e.stopPropagation();
    };

    const handleEditProfileButton = () => {
        // console.log("Edit Button Clicked");

        router.push('/0/timeline/' + timelineUserId + '/edit');
    }

    const handleConfirmRequestClick = () => {
        handleAcceptFriendRequest();
    }

    const handleAddRequestClick = () => {
        handleAddFriendRequest();
    }

    const handleAddFriendRequest = async () => {

        // console.log(userProfileId);

        const data = {
            requestReceivedUserId: timelineUserId
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

                // console.log(data);

                setIsFriendRequestSent(true);
                setIsFriendRequestAccepted(false);
                setIsFriend(false);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleAcceptFriendRequest = async () => {

        // console.log(userProfileId);

        const data = {
            requestSentUserId: timelineUserId
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

                dispatch(addFriend(data?.newFriendshipAccept));

                setIsFriendRequestAccepted(true);
                setIsFriendRequestSent(false);
                setIsFriend(true);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleCancelRequestClick = async () => {

        // console.log(userProfileId);

        const data = {
            requestSentUserId: timelineUserId
        }

        try {
            const response = await fetch('/api/1.0/users/friends/cancelRequest', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to cancel friend request. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                // console.log(data);

                setIsFriendRequestAccepted(false);
                setIsFriendRequestSent(false);
                setIsFriend(false);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleDeleteRequestClick = async () => {

        // console.log(userProfileId);

        const data = {
            requestReceivedUserId: timelineUserId
        }

        try {
            const response = await fetch('/api/1.0/users/friends/deleteRequest', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to delete friend request. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                // console.log(data);

                setIsFriendRequestAccepted(false);
                setIsFriendRequestSent(false);
                setIsFriend(false);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleDeleteFriendClick = async () => {

        // console.log(userProfileId);

        const data = {
            removeFriendUserId: timelineUserId
        }

        try {
            const response = await fetch('/api/1.0/users/friends/removeFriend', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to delete friend. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                // console.log(data);

                setIsFriendRequestAccepted(false);
                setIsFriendRequestSent(false);
                setIsFriend(false);
            }
        } catch (e) {
            // console.log("error", e)

        }

    };

    const handleFriendButtonMouseEnter = () => {
        setIsFriendButtonHovered(true);
    }

    const handleFriendButtonMouseLeave = () => {
        setIsFriendButtonHovered(false);
    }

    const handleRemoveFriendButtonEnter = () => {
        setIsRemoveFriendHovered(true)
    }

    const handleRemoveFriendButtonLeave = () => {
        setIsRemoveFriendHovered(false)
    }

    const handleRemoveFriendClick = () => {
        handleDeleteFriendClick();
    }

    // console.log(friendshipStatus);

    return (
        <div className={`${styles.row} row`}>
            <div className={`col-md-3 ${styles.profileCol}`}>
                <div className={styles.profileInfo}>
                    {friendshipStatus == 'currentUser' ?
                        <img
                            className={`${styles.imgResponsive} profile-photo`}
                            src={typeof (selectedProfileImage) == 'string' ? selectedProfileImage : selectedProfileImage instanceof File || selectedProfileImage instanceof Blob
                                ? URL.createObjectURL(selectedProfileImage) : {}}
                            alt="Profile"
                            onClick={handleProfileImageLinkClick}
                        /> :
                        <img
                            className={`${styles.imgResponsive} profile-photo`}
                            src={selectedProfileImage}
                            alt="Profile"
                        />
                    }

                    <h3>{timelineUser.firstName + ' ' + timelineUser.lastName}</h3>

                </div>
            </div>
            {/* Hidden file input */}
            {friendshipStatus == 'currentUser' &&
                <input
                    type="file"
                    accept="image/*"
                    id="profileImageInput"
                    className={styles.hiddenFileInput}
                    onClick={handleProfileImageInputClick}
                    onChange={handleProfileImageChange}
                />
            }
            <div className={`col-md-9 ${styles.timelineCol}`} onClick={handleTimelineColClick}>
                <ul className={`${styles.profileMenu} ${styles.listInline}`}>
                    <li>
                        <Link className={whichPage == 'timeline' ? styles.active : ''} href={"/0/timeline/" + timelineUserId}>
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link className={(whichPage == 'timelineEdit' || whichPage == 'timelineAbout') ? styles.active : ''} href={"/0/timeline/" + timelineUserId + "/about"}>
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
                        {(friendshipStatus == 'friend' && isFriend) || isFriendRequestAccepted ?
                            // Button For Existing Friend
                            <button
                                className={`${styles.btnPrimary}`}
                                onMouseEnter={handleFriendButtonMouseEnter}
                                onMouseLeave={handleFriendButtonMouseLeave}
                            >
                                Friend
                            </button>
                            // Button For Existing Friend
                            : (friendshipStatus == 'currentUser') ?
                                // Button For Current User
                                <button
                                    className={`${styles.btnPrimary}`}
                                    onClick={handleEditProfileButton}
                                >
                                    Edit Profile
                                </button>
                                // Button For Current User
                                : ((friendshipStatus == 'sentFriendRequest' && isFriend) || isFriendRequestSent) ?
                                    // Buttons For Friend Request Sent User
                                    <button
                                        className={`${styles.btnPrimary}`}
                                        onClick={handleCancelRequestClick}
                                    >
                                        Cancel Request
                                    </button>
                                    // Buttons For Friend Request Sent User
                                    : (friendshipStatus == 'receivedFriendRequest' && !isFriendRequestAccepted && isFriend) ?
                                        // Buttons For Friend Request Received User
                                        <>
                                            <button
                                                className={`${styles.btnPrimary}`}
                                                style={{ margin: '5px' }}
                                                onClick={handleConfirmRequestClick}
                                            >
                                                Confirm Friend
                                            </button>
                                            <button
                                                className={`${styles.btnPrimary}`}
                                                style={{ margin: '5px' }}
                                                onClick={handleDeleteRequestClick}
                                            >
                                                Delete Request
                                            </button>
                                        </>

                                        // Buttons For Friend Request Received User
                                        :
                                        // Button For Not Friend User
                                        <button
                                            className={`${styles.btnPrimary}`}
                                            onClick={handleAddRequestClick}
                                        >
                                            Add Friend
                                        </button>
                            // Button For Not Friend User
                        }
                    </li>
                    {(isFriendButtonHovered || isRemoveFriendHovered) &&
                        <li
                            className={styles.hiddenMenu}
                            onMouseEnter={handleRemoveFriendButtonEnter}
                            onMouseLeave={handleRemoveFriendButtonLeave}
                            onClick={handleRemoveFriendClick}
                        >
                            <div
                                id='#removeFriend'
                            >
                                Remove Friend
                            </div>
                        </li>
                    }

                </ul>
            </div>
        </div>
    );
}


