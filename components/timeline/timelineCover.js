import { updateCoverPictureUser } from '@/utils/features/userSlice';
import styles from './timelineCover.module.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { getImageBlob } from '@/utils/common';

export default function TimelineCover({ children, timelineUserId, timelineUser, friendshipStatus }) {

    const [selectedCoverImage, setSelectedCoverImage] = useState(timelineUser.coverImage);
    const [isCoverImageChanged, setIsCoverImageChanged] = useState(false);
    const [selectedCoverImageBlobURL, setSelectedCoverImageBlobURL] = useState(null);
    const [isCoverImageLoading, setIsCoverImageLoading] = useState(true);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (timelineUser.coverImage)
            getImageBlob(timelineUser.coverImage, setSelectedCoverImageBlobURL)
                .then(() => {
                    setIsCoverImageLoading(false);
                })
    }, [])

    useEffect(() => {
        // console.log("Timeline user cover image in timeline cover ===> ", timelineUser.coverImage);

        setSelectedCoverImage(timelineUser.coverImage);
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
                            // console.log('Cover Picture Updated Successfully!', action);
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

        setIsCoverImageChanged(true);
        setSelectedCoverImage(file); //Set the selected file in selectedCoverImage

    };

    const handleCoverImageInputClick = (e) => {
        e.stopPropagation();
    };

    const handleMouseOverCover = (e) => {

        if ($(e.currentTarget).is(e.target)) {
            $(e.currentTarget).addClass('timelineCoverIsHovered');
        } else {
            // If the event target is a child element, remove the hover class
            $(e.currentTarget).removeClass('timelineCoverIsHovered');
        }
    }

    const handleMouseLeaveCover = (e) => {
        $(e.currentTarget).removeClass('timelineCoverIsHovered');
    }

    // console.log("Is cover image loading ==> ", isCoverImageLoading);

    return (
        <>
            {friendshipStatus && (friendshipStatus == 'currentUser' ?
                (isCoverImageLoading ?
                    <div
                        className={styles.timelineCoverLoader}
                        style={{
                            background: `url("/images/imageLoader.gif") no-repeat`,
                        }}
                        onClick={handleCoverImageLinkClick}
                        onMouseOver={handleMouseOverCover}
                        onMouseLeave={handleMouseLeaveCover}
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
                    </div> :

                    <div
                        className={styles.timelineCover}
                        style={!isCoverImageChanged
                            ? { background: `url("${selectedCoverImageBlobURL}") no-repeat` }
                            : selectedCoverImage instanceof File || selectedCoverImage instanceof Blob
                                ? { background: `url(${URL.createObjectURL(selectedCoverImage)}) no-repeat` }
                                : {}}
                        onClick={handleCoverImageLinkClick}
                        onMouseOver={handleMouseOverCover}
                        onMouseLeave={handleMouseLeaveCover}
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
                    </div>)
                :
                (isCoverImageLoading ?
                    <div
                        className={styles.timelineCoverLoader}
                        style={{
                            background: `url("/images/imageLoader.gif") no-repeat`,
                        }}
                    >

                        {children}
                    </div> :
                    <div
                        className={styles.timelineCover}
                        style={{ background: `url(${selectedCoverImageBlobURL}) no-repeat` }}
                    >

                        {children}
                    </div>)
            )
            }
        </>

    );
}
