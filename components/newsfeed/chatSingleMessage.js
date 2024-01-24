import styles from './chatSingleMessage.module.css';

export default function ChatSingleMessage({ leftOrRight, userImg, userName, timeElapsed, message, image, isUserTyping }) {

    const text = "typing...";

    return (
        <li
            className={leftOrRight}

        >
            <img
                className={`${styles.profilePhotoSm} ${leftOrRight == "left" ? styles.pullLeft + " pull-left" : styles.pullRight + " pull-right"} profile-photo-sm`}
                src={process.env.BASE_URL + userImg}

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
                    <img src={process.env.BASE_URL + image} className={styles.chatImage} /> :
                    <></>}

            </div>
        </li>
    )
};