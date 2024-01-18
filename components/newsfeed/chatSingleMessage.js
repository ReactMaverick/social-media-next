import styles from './chatSingleMessage.module.css';

export default function ChatSingleMessage({ leftOrRight }) {
    return (
        <li
            className={leftOrRight}

        >
            <img
                className={`${styles.profilePhotoSm} ${leftOrRight == "left" ? styles.pullLeft + " pull-left" : styles.pullRight + " pull-right"} profile-photo-sm`}
                src={process.env.BASE_URL + "/images/user_2_image.jpg"}

            />
            <div
                className="chat-item"

            >
                <div
                    className="chat-item-header"

                >
                    <h5

                    >
                        Linda Lohan
                    </h5>
                    <small
                        className={`${styles.textMuted} text-muted`}

                    >
                        3 days ago
                    </small>
                </div>
                <p

                >
                    Hi honey, how are you doing???? Long time no see.
                    Where have you been?
                </p>
            </div>
        </li>
    )
};