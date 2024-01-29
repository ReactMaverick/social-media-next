import styles from './timelineNavRow.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TimelineNavRow({ whichPage, timelineUserId, timelineUser, friendshipStatus }) {
    // console.log(whichPage);

    const [selectedImage, setSelectedImage] = useState(process.env.BASE_URL + timelineUser.image);

    useEffect(() => {
        // console.log("Selected Image ===> ", selectedImage);
        const profileImageChange = async () => {
            if (typeof (selectedImage) == 'object') {
                try {
                    const fileData = new FormData();

                    fileData.append('image', selectedImage);

                    const response = await fetch('/api/1.0/users/profilePic', {
                        method: 'POST',
                        body: fileData,
                    });

                    if (!response.ok) {
                        // If the response status is not OK, throw an error
                        throw new Error(`Failed to upload image/video. Status: ${response.status}`);
                    }

                    if (response.ok) {
                        const data = await response.json();
                        console.log(data); // Log the response from the server


                    }
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

                    {friendshipStatus == 'currentUser' ?
                        <h3>{timelineUser.name}</h3> :
                        <h3>{timelineUser.firstName + ' ' + timelineUser.lastName}</h3>
                    }

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


