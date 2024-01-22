import styles from './chatListItem.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConversations, selectConversations } from '@/utils/features/chatSlice';

export default function ChatListItem({ href, imgSrc, userName, lastMessage, timeAgo, user_id }) {
    const dispatch = useDispatch();
    const conversations = useSelector(selectConversations);
    // console.log(currentUser);

    const handleFetchConversations = (userId) => {

        $("html, body").animate({
            scrollTop: $(document).height()
        }, 100);

        setTimeout(() => {
            var lastLi = $(".chat-body li:last");
            if (lastLi.length > 0) {
                $(".chatRoom_tabContent__sPppD").animate({
                    scrollTop: lastLi.offset().top
                }, 1000);
            }

        }, 1000);

        dispatch(fetchUserConversations(userId));
    };

    return (
        <li
        >
            <Link

                href={href}
                data-bs-toggle="tab"
                onClick={() => handleFetchConversations(user_id)}
            >
                <div
                    className={`${styles.contact} contact`}
                >
                    <img
                        className={`${styles.profilePhotoSm} ${styles.pullLeft} profile-photo-sm pull-left`}
                        src={process.env.BASE_URL + imgSrc}
                    />
                    <div
                        className={`${styles.msgPreview} msg-preview`}
                        style={{ marginLeft: "50px" }}
                    >
                        <h6
                        >
                            {userName}
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