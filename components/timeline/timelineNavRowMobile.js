import styles from './timelineNavRowMobile.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';

export default function TimelineNavRowMobile({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {



    const dispatch = useAppDispatch();

    const [selectedImage, setSelectedImage] = useState(process.env.BASE_URL + timelineUser.image);

    useEffect(() => {
        // console.log("Timeline user image in nav ===> ", timelineUser.image);

        console.log(friendshipStatus);

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

    // console.log("Timeline User ===> ", timelineUser);
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
                {console.log(friendshipStatus)}
                {friendshipStatus == 'friend' || friendshipStatus == 'currentUser' ?
                    <button className={`${styles.btnPrimary}`}>Friend</button> :
                    <button className={`${styles.btnPrimary}`}>Add Friend</button>
                }
            </div>
        </>
    );
}
