import { updateCoverPictureUser } from '@/utils/features/userSlice';
import styles from './timelineCover.module.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';

export default function TimelineCover({ children, timelineUserId, timelineUser, friendshipStatus }) {

    const [selectedCoverImage, setSelectedCoverImage] = useState(process.env.BASE_URL + timelineUser.coverImage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // console.log("Timeline user cover image in timeline cover ===> ", timelineUser.coverImage);

        setSelectedCoverImage(process.env.BASE_URL + timelineUser.coverImage);
    }, [timelineUser]);

    useEffect(() => {
        // console.log("Selected Image ===> ", selectedImage);
        const coverImageChange = async () => {
            if (typeof (selectedCoverImage) == 'object') {
                try {
                    // Dispatch the addComment action
                    dispatch(updateCoverPictureUser({ selectedCoverImage }))
                        .then((action) => {
                            // Handle success if needed
                            console.log('Cover Picture Updated Successfully!', action);
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

        coverImageChange();

        // console.log(typeof (selectedCoverImage));


    }, [selectedCoverImage])

    const handleCoverImageLinkClick = (e) => {
        e.stopPropagation();

        $("#coverImageInput").click();
        // console.log(selectedImage);
    };

    const handleCoverImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        if (typeof (selectedCoverImage) == 'object')
            URL.revokeObjectURL(URL.createObjectURL(selectedCoverImage));

        setSelectedCoverImage(file); //Set the selected file in selectedCoverImage

    };

    const handleCoverImageInputClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {friendshipStatus == 'currentUser' ?
                <div
                    className={styles.timelineCover}
                    style={typeof selectedCoverImage === 'string'
                        ? { background: `url("${selectedCoverImage}") no-repeat` }
                        : selectedCoverImage instanceof File || selectedCoverImage instanceof Blob
                            ? { background: `url(${URL.createObjectURL(selectedCoverImage)}) no-repeat` }
                            : {}}
                    onClick={handleCoverImageLinkClick}
                >

                    <input
                        type="file"
                        accept="image/*"
                        id="coverImageInput"
                        className={styles.hiddenFileInput}
                        onClick={handleCoverImageInputClick}
                        onChange={handleCoverImageChange}
                    />
                    {children}
                </div>
                :
                <div
                    className={styles.timelineCover}
                    style={{ background: `url(${selectedCoverImage}) no-repeat` }}
                >

                    {children}
                </div>
            }
        </>

    );
}
