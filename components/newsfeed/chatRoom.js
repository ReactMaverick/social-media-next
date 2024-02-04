'use client'
import styles from './chatRoom.module.css';
import ChatListItem from './chatListItem';
import TabPaneChat from './tabPaneChat';
import SendMessage from './sendMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConversations, selectConversations } from '@/utils/features/chatSlice';
import { useEffect, useState } from 'react';
import { getTimeElapsed } from '@/utils/common';


export default function ChatRoom({ currentUser, users, friends, lastMessages, unreadCount, lastMessageTimes }) {

    const [isUserTyping, setIsUserTyping] = useState(false);

    const [activeTab, setActiveTab] = useState(null);

    const dispatch = useDispatch();
    const conversations = useSelector(selectConversations);

    // console.log(isUserTyping);

    // console.log("Active Tab ==> ", activeTab);

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
                                            unreadCountOfFriend={unreadCount[friend.friend._id]}
                                            lastMessageTime={lastMessageTimes[friend.friend._id] && getTimeElapsed(lastMessageTimes[friend.friend._id])}
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
                                            (user._id !== currentUser._id) &&
                                            <TabPaneChat
                                                key={user._id}
                                                tabId={user._id}
                                                conversations={conversations}
                                                currentUser={currentUser}
                                                isUserTyping={isUserTyping}
                                                setActiveTab={setActiveTab}
                                                activeTab={activeTab}
                                            />
                                        ) :
                                        users.map((user) =>
                                            (user._id !== currentUser._id) &&
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
                            {console.log("Current user before sendmessage ==> ", currentUser)}
                            {(currentUser && conversations) ?
                                <SendMessage
                                    currentUser={currentUser}
                                    conversations={conversations}
                                    setIsUserTyping={setIsUserTyping}
                                    activeTab={activeTab}
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
