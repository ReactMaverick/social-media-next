'use client'
import styles from './chatRoom.module.css';
import Link from 'next/link';
import ChatListItem from './chatListItem';
import TabPaneChat from './tabPaneChat';
import SendMessage from './sendMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConversations, selectConversations } from '@/utils/features/chatSlice';
import { useEffect } from 'react';


export default function ChatRoom({ currentUser, users, friends, lastMessages }) {

    const dispatch = useDispatch();
    const conversations = useSelector(selectConversations);

    useEffect(() => {
        // Logic to run after conversations state changes
        // console.log('Conversations updated in chatroom:', conversations);
    }, [conversations]); // Run the effect when conversations state changes

    // console.log("current conversations ==> ", conversations);

    return (
        <>
            {(currentUser && friends) && (
                <div className="chatRoom">
                    <div
                        className={`${styles.row} row`}
                    >
                        <div
                            className={`${styles.chatList} col-md-5`}
                        >
                            <div
                                className={`${styles.scrollWrapper} ${styles.contactList} nav nav-tabs contact-list`}
                            >
                                <ul
                                    className="nav nav-tabs contact-list"
                                >
                                    {friends.map((friend) =>
                                        <ChatListItem
                                            user_id={friend.friend._id}
                                            key={friend.friend._id}
                                            href={"#" + friend.friend._id}
                                            imgSrc={friend.friend.image}
                                            userName={friend.friend.firstName + ' ' + friend.friend.lastName}
                                            lastMessageOfFriend={lastMessages[friend.friend._id]}

                                        />)}

                                </ul>

                            </div>
                        </div>
                        <div
                            className={`${styles.messageView} col-md-7`} id='chatroomMessageView'
                        >
                            <div
                                className={`${styles.scrollWrapper} ${styles.tabContent} tab-content`}
                            >
                                <div
                                    className={`${styles.tabContentInner} tab-content`}
                                >
                                    {conversations ?
                                        users.map((user) =>
                                            (user._id !== currentUser.id) &&
                                            <TabPaneChat
                                                key={user._id}
                                                tabId={user._id}
                                                conversations={conversations}
                                                currentUser={currentUser}
                                            />
                                        ) :
                                        users.map((user) =>
                                            (user._id !== currentUser.id) &&
                                            <TabPaneChat
                                                key={user._id}
                                                tabId={user._id}
                                                conversations={[]}
                                                currentUser={currentUser}
                                            />
                                        )
                                    }

                                </div>

                            </div>
                            {(currentUser && conversations) ?
                                <SendMessage
                                    currentUser={currentUser}
                                    conversations={conversations}
                                /> :
                                <></>
                            }

                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            )}
        </>

    );
}
