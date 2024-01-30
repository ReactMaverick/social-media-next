import styles from './timelineNavRowMobile.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';
import { useRouter } from 'next/navigation';

export default function TimelineNavRowMobile({ whichPage, timelineUserId, timelineUser, friendshipStatus, setFriendshipStatus }) {

    const dispatch = useAppDispatch();

    const router = useRouter();

    const [selectedImage, setSelectedImage] = useState(process.env.BASE_URL + timelineUser.image);


    useEffect(() => {
        // console.log("Timeline user image in nav ===> ", timelineUser.image);

        // console.log(friendshipStatus);

        setSelectedImage(process.env.BASE_URL + timelineUser.image);
    }, [timelineUser]);

    useEffect(() => {
        // console.log("Selected Image ===> ", selectedImage);
        const profileImageChange = async () => {
            if (typeof (selectedImage) == 'object') {
                try {
                    // Dispatch the addComment action
                    dispatch(updateProfilePictureUser({ selectedImage }))
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

        if (typeof (selectedImage) == 'object')
            URL.revokeObjectURL(URL.createObjectURL(selectedImage));

        setSelectedImage(file); //Set the selected file in selectedImage

    };

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
        // setFriendshipStatus('friend')
    }

    // console.log("Timeline User ===> ", timelineUser);

    // console.log(setFriendshipStatus);

    return (
        <>
            <div
                className="profile-info"
            >
                {friendshipStatus == 'currentUser' ?
                    <img
                        className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                        src={typeof (selectedImage) == 'string' ? selectedImage : selectedImage instanceof File || selectedImage instanceof Blob
                            ? URL.createObjectURL(selectedImage) : {}}
                        alt="Profile"
                        onClick={handleProfileImageLinkMobileClick}
                    /> :
                    <img
                        className={`img-responsive profile-photo ${styles.imgResponsive} ${styles.profilePhoto}`}
                        src={selectedImage}
                    />
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
                className="mobile-menu"
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
                            className={whichPage == 'timelineEdit' ? styles.active : ''}
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
                    <li

                    >
                        <Link
                            href={"/0/timeline/" + timelineUserId + "/friends"}
                            className={whichPage == 'timelineFriends' ? styles.active : ''}
                        >
                            Friends
                        </Link>
                    </li>
                </ul>
                {friendshipStatus == 'friend' ?
                    // Button For Existing Friend
                    <button
                        className={`${styles.btnPrimary}`}
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
                        : (friendshipStatus == 'sentFriendRequest') ?
                            // Button For Friend Request Sent User
                            <button
                                className={`${styles.btnPrimary}`}
                            >
                                Cancel Request
                            </button>
                            // Button For Friend Request Sent User
                            : (friendshipStatus == 'receivedFriendRequest') ?
                                // Button For Friend Request Received User
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
                                    >
                                        Delete Request
                                    </button>
                                </>
                                // Button For Friend Request Received User
                                :
                                // Button For Not Friend User
                                <button
                                    className={`${styles.btnPrimary}`}
                                >
                                    Add Friend
                                </button>
                    // Button For Not Friend User
                }
            </div>
        </>
    );
}
