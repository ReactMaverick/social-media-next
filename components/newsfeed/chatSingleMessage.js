import styles from './chatSingleMessage.module.css';
import { useState, useEffect } from 'react';
import { getImageBlob } from '@/utils/common';

export default function ChatSingleMessage({ leftOrRight, userImg, userName, timeElapsed, message, image, isUserTyping }) {

    const [userImageBlobURL, setUserImageBlobURL] = useState(null);
    const [isUserImageLoading, setIsUserImageLoading] = useState(true);
    const [imageBlobURL, setImageBlobURL] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        if (userImg)
            getImageBlob(userImg, setUserImageBlobURL)
                .then(() => {
                    setIsUserImageLoading(false)
                });

        if (image)
            getImageBlob(image, setImageBlobURL)
                .then(() => {
                    setIsImageLoading(false)
                });
    }, [])

    const text = "typing...";

    // console.log(imageBlobURL);

    return (
        <li
            className={leftOrRight}

        >
            {isUserImageLoading ?
                <img
                    className={`${styles.profilePhotoSm} ${leftOrRight == "left" ? styles.pullLeft + " pull-left" : styles.pullRight + " pull-right"} profile-photo-sm`}
                    src={process.env.BASE_URL + '/images/imageLoader.gif'}
                    loading='lazy'

                /> :
                <img
                    className={`${styles.profilePhotoSm} ${leftOrRight == "left" ? styles.pullLeft + " pull-left" : styles.pullRight + " pull-right"} profile-photo-sm`}
                    src={userImageBlobURL}
                    loading='lazy'

                />
            }

            <div
                className="chat-item"

            >
                {userName ?
                    <div
                        className="chat-item-header"

                    >
                        <h5
                            className={styles.h5}
                        >
                            {userName}
                        </h5>
                        <small
                            className={`${styles.textMuted} text-muted`}

                        >
                            {timeElapsed}
                        </small>
                    </div>
                    : <></>}
                {isUserTyping ?
                    <div className={styles.wavyTypingText}>
                        {text.split('').map((char, index) => (
                            <span key={index} style={{ '--i': index + 1 }}>
                                {char}
                            </span>
                        ))}
                    </div> :
                    <p

                    >
                        {message}
                    </p>
                }


                {image ? (isImageLoading ?
                    <img src={process.env.BASE_URL + '/images/imageLoader.gif'} className={styles.chatImage} loading='lazy' /> :
                    <img src={imageBlobURL} className={styles.chatImage} loading='lazy' />) :
                    <></>}

            </div>
        </li>
    )
};