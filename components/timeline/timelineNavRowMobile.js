import styles from './timelineNavRowMobile.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';
import { useRouter } from 'next/navigation';
import { addFriend } from '@/utils/features/friendsSlice';
import { getImageBlob } from '@/utils/common';

export default function TimelineNavRowMobile({ whichPage, timelineUserId, timelineUser, friendshipStatus, setFriendshipStatus }) {

    const dispatch = useAppDispatch();

    const router = useRouter();

    const [selectedImage, setSelectedImage] = useState(timelineUser.image);
    const [isFriendRequestAccepted, setIsFriendRequestAccepted] = useState(false);
    const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);
    const [isFriend, setIsFriend] = useState(true);
    const [isFriendButtonClicked, setIsFriendButtonClicked] = useState(false);
    const [isProfileImageChanged, setIsProfileImageChanged] = useState(false);
    const [selectedProfileImageBlobURL, setSelectedProfileImageBlobURL] = useState(null);
    const [isProfileImageLoading, setIsProfileImageLoading] = useState(true);

    useEffect(() => {
        if (timelineUser.image) {
            getImageBlob(timelineUser.image, setSelectedProfileImageBlobURL)
                .then(() => {
                    setIsProfileImageLoading(false);
                })
        } else {
            setSelectedProfileImageBlobURL('/images/no_user.webp');
            setIsProfileImageLoading(false);
        }
    }, [])

    useEffect(() => {
        // console.log("Timeline user image in nav ===> ", timelineUser.image);

        // console.log(friendshipStatus);

        setSelectedImage(timelineUser.image);
    }, [timelineUser]);

    useEffect(() => {
        // console.log("Selected Image ===> ", selectedImage);
        const profileImageChange = async () => {
            if (typeof (selectedImage) == 'object') {
                try {
                    // Dispatch the addComment action
                    dispatch(updateProfilePictureUser({ selectedProfileImage: selectedImage }))
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


    }, [selectedImage])

    const handleProfileImageChangeMobile = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        const maxSize = 2 * 1024 * 1024; // 2MB

        if (file.size > maxSize) {
            alert('File is too large, please select a file less than 2MB.');
            return;
        }

        if (typeof (selectedImage) == 'object')
            URL.revokeObjectURL(URL.createObjectURL(selectedImage));

        setIsProfileImageLoading(false);
        setIsProfileImageChanged(true);
        setSelectedImage(file); //Set the selected file in selectedImage

        if (timelineUser.image !== '')
            deletePreviousProfileImage();

    };

    const deletePreviousProfileImage = async () => {
        try {
            const data = {
                fileType: 'images',
                fileName: timelineUser.image,
            }

            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/delete', {
                method: 'DELETE',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`Failed to delete profile image. Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }
        } catch (e) {
            // console.log("error", e)
        }
    }

    const handleProfileImageInputClickMobile = (e) => {
        e.stopPropagation();
    };

    const handleProfileImageLinkMobileClick = (e) => {
        e.stopPropagation();

        $("#profileImageInputMobile").click();
        // console.log(selectedImage);
    };

    const handleMobileMenuClick = (e) => {
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
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/users/friends/addRequest', {
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
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/users/friends/acceptRequest', {
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
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/users/friends/cancelRequest', {
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
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/users/friends/deleteRequest', {
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
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + '/api/1.0/users/friends/removeFriend', {
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

    const handleFriendButtonClick = () => {
        if (isFriendButtonClicked) {
            setIsFriendButtonClicked(false);
        } else {
            setIsFriendButtonClicked(true);
        }
    }

    const handleRemoveFriendClick = () => {
        handleDeleteFriendClick();

        setIsFriendButtonClicked(false);
    }

    // console.log("Timeline User ===> ", timelineUser);

    // console.log(setFriendshipStatus);

    return (
        <>
            <div
                className={`profile-info ${friendshipStatus == 'currentUser' ? 'profile-info-currentUser' : ''}`}
                onClick={handleProfileImageLinkMobileClick}
            >
                {friendshipStatus == 'currentUser' ?
                    (isProfileImageLoading ?
                        <img
                            className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                            src={process.env.BASE_URL + '/images/imageLoader.gif'}
                            alt="Profile"
                            // onClick={handleProfileImageLinkMobileClick}
                            loading='lazy'
                        /> :
                        <img
                            className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                            src={!isProfileImageChanged ? selectedProfileImageBlobURL : selectedImage instanceof File || selectedImage instanceof Blob
                                ? URL.createObjectURL(selectedImage) : {}}
                            alt="Profile"
                            // onClick={handleProfileImageLinkMobileClick}
                            loading='lazy'
                        />) :
                    (isProfileImageLoading ?
                        <img
                            className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                            src={process.env.BASE_URL + '/images/imageLoader.gif'}
                            loading='lazy'
                        /> :
                        <img
                            className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                            src={selectedProfileImageBlobURL}
                            loading='lazy'
                        />)
                }
                <h4
                    className={styles.h4}
                >
                    {timelineUser.firstName + ' ' + timelineUser.lastName}
                </h4>
            </div>

            {/* Hidden file input */}
            {friendshipStatus == 'currentUser' &&
                <input
                    type="file"
                    accept="image/*"
                    id="profileImageInputMobile"
                    className={styles.hiddenFileInput}
                    onClick={handleProfileImageInputClickMobile}
                    onChange={handleProfileImageChangeMobile}
                />
            }

            <div
                className={`mobile-menu ${styles.mobileMenu}`}
                onClick={handleMobileMenuClick}
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
                            className={(whichPage == 'timelineEdit' || whichPage == 'timelineAbout') ? styles.active : ''}
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
                    {friendshipStatus == 'currentUser' &&
                        <li

                        >
                            <Link
                                href={"/0/timeline/" + timelineUserId + "/friends"}
                                className={whichPage == 'timelineFriends' ? styles.active : ''}
                            >
                                Friends
                            </Link>
                        </li>
                    }
                </ul>
                {(friendshipStatus == 'friend' && isFriend) || isFriendRequestAccepted ?
                    // Button For Existing Friend
                    <button
                        className={`${styles.btnPrimary}`}
                        onClick={handleFriendButtonClick}
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
                {(isFriendButtonClicked) &&
                    <li
                        className={styles.hiddenMenu}
                        onClick={handleRemoveFriendClick}
                    >
                        <div
                            id='#removeFriend'
                        >
                            Remove Friend
                        </div>
                    </li>
                }
            </div>
        </>
    );
}
