import styles from './chatSingleMessage.module.css';
import { useState, useEffect } from 'react';
import { getImageBlob } from '@/utils/common';

export default function ChatSingleMessage({ leftOrRight, userImg, userName, timeElapsed, message, image, isUserTyping }) {

    const [userImageBlobURL, setUserImageBlobURL] = useState(null);
    const [imageBlobURL, setImageBlobURL] = useState(null);

    useEffect(() => {
        if (userImg)
            getImageBlob(userImg, setUserImageBlobURL);

        if (image)
            getImageBlob(image, setImageBlobURL);
    }, [])

    const text = "typing...";

    console.log(imageBlobURL);

    return (
        <li
            className={leftOrRight}

        >
            <img
                className={`${styles.profilePhotoSm} ${leftOrRight == "left" ? styles.pullLeft + " pull-left" : styles.pullRight + " pull-right"} profile-photo-sm`}
                src={userImageBlobURL}
                loading='lazy'

            />
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


                {image ?
                    <img src={imageBlobURL} className={styles.chatImage} loading='lazy' /> :
                    <></>}

            </div>
        </li>
    )
};