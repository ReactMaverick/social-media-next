import styles from './timelineNavRow.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { updateProfilePictureUser } from '@/utils/features/userSlice';

export default function TimelineNavRow({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {
    // console.log(whichPage);

    useEffect(() => {
        console.log("Timeline user image in nav ===> ", timelineUser.image);

        setSelectedImage(process.env.BASE_URL + timelineUser.image);
    }, [timelineUser]);

    const dispatch = useAppDispatch();

    const [selectedImage, setSelectedImage] = useState(process.env.BASE_URL + timelineUser.image);

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

    const handleImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        if (typeof (selectedImage) == 'object')
            URL.revokeObjectURL(URL.createObjectURL(selectedImage));

        setSelectedImage(file); //Set the selected file in selectedImage

    };

    const handleImageLinkClick = () => {
        $("#imageInput").click();
        // console.log(selectedImage);
    };

    return (
        <div className={`${styles.row} row`}>
            <div className={`col-md-3 ${styles.profileCol}`}>
                <div className={styles.profileInfo}>
                    {friendshipStatus == 'currentUser' ?
                        <img
                            className={`${styles.imgResponsive} profile-photo`}
                            src={typeof (selectedImage) == 'string' ? selectedImage : URL.createObjectURL(selectedImage)}
                            alt="Profile"
                            onClick={handleImageLinkClick}
                        /> :
                        <img
                            className={`${styles.imgResponsive} profile-photo`}
                            src={selectedImage}
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
                    id="imageInput"
                    className={styles.hiddenFileInput}
                    onChange={handleImageChange}
                />
            }
            <div className={`col-md-9 ${styles.timelineCol}`}>
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


