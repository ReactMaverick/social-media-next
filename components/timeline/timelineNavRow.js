import styles from './timelineNavRow.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';

export default function TimelineNavRow({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {
    // console.log(whichPage);
    const dispatch = useAppDispatch();

    const [selectedProfileImage, setSelectedProfileImage] = useState(process.env.BASE_URL + timelineUser.image);

    useEffect(() => {
        // console.log("Timeline user image in nav ===> ", timelineUser.image);

        setSelectedProfileImage(process.env.BASE_URL + timelineUser.image);
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

        console.log($("#profileImageInput"));

        $("#profileImageInput").click();
        // console.log(selectedProfileImage);
    };

    const handleProfileImageInputClick = (e) => {
        e.stopPropagation();
    };

    const handleTimelineColClick = (e) => {
        e.stopPropagation();
    };

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
                        <Link className={whichPage == 'timelineEdit' ? styles.active : ''} href={"/0/timeline/" + timelineUserId + "/about"}>
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
                        {friendshipStatus == 'friend' || friendshipStatus == 'currentUser' ?
                            <button className={`${styles.btnPrimary}`}>Friend</button> :
                            <button className={`${styles.btnPrimary}`}>Add Friend</button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}


