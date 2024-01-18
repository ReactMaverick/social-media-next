import styles from './chatListItem.module.css';
import Link from 'next/link';

export default function ChatListItem({ href }) {
    return (
        <li
        >
            <Link

                href={href}
                data-bs-toggle="tab"
            >
                <div
                    className={`${styles.contact} contact`}
                >
                    <img
                        className={`${styles.profilePhotoSm} ${styles.pullLeft} profile-photo-sm pull-left`}
                        src={process.env.BASE_URL + "/images/user_2_image.jpg"}
                    />
                    <div
                        className={`${styles.msgPreview} msg-preview`}
                        style={{ marginLeft: "50px" }}
                    >
                        <h6
                        >
                            Linda Lohan
                        </h6>
                        <p

                        >
                            Hi there, how are you
                        </p>
                        <small
                            className={`${styles.textMuted} text-muted`}
                        >
                            a min ago
                        </small>
                        <div
                            className={`${styles.chatAlert} chat-alert`}
                        >
                            1
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};