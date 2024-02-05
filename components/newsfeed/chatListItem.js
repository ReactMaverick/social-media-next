import styles from './chatListItem.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConversations, selectConversations } from '@/utils/features/chatSlice';
import { useState, useEffect } from 'react';
import { getImageBlob } from '@/utils/common';

export default function ChatListItem({ href, imgSrc, userName, user_id, lastMessageOfFriend, unreadCountOfFriend, lastMessageTime }) {

    const [userImageBlobURL, setUserImageBlobURL] = useState(null);
    const [isUserImageLoading, setIsUserImageLoading] = useState(true);

    useEffect(() => {
        if (imgSrc)
            getImageBlob(imgSrc, setUserImageBlobURL)
                .then(() => {
                    setIsUserImageLoading(false)
                });
    }, [])

    const dispatch = useDispatch();
    const conversations = useSelector(selectConversations);
    // console.log(currentUser);

    // useEffect(() => {
    //   // console.log("Component Reloaded");
    // }, [lastMessageOfFriend])

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
                    {isUserImageLoading ?
                        <img
                            className={`${styles.profilePhotoSm} ${styles.pullLeft} profile-photo-sm pull-left`}
                            src={process.env.BASE_URL + 'images/imageLoader.gif'}
                            loading='lazy'
                        /> :
                        <img
                            className={`${styles.profilePhotoSm} ${styles.pullLeft} profile-photo-sm pull-left`}
                            src={userImageBlobURL}
                            loading='lazy'
                        />
                    }

                    <div
                        className={`${styles.msgPreview} msg-preview`}
                        style={{ marginLeft: "50px" }}
                    >
                        <h6
                        >
                            {userName}
                        </h6>
                        {lastMessageOfFriend ?
                            <p
                            >
                                {lastMessageOfFriend}
                            </p> :
                            <p
                                className={styles.chatLoader}
                            >

                            </p>
                        }

                        {lastMessageTime ?
                            <small
                                className={`${styles.textMuted} text-muted`}
                            >
                                {lastMessageTime}
                            </small> :
                            <small
                                className={`${styles.textMuted} ${styles.chatLoader} text-muted`}
                            >
                            </small>
                        }

                        {unreadCountOfFriend ?
                            <div
                                className={`${styles.chatAlert} chat-alert`}
                            >
                                {unreadCountOfFriend}
                            </div> :
                            <></>
                        }
                    </div>
                </div>
            </Link>
        </li>
    );
};