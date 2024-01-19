'use client'
import styles from './chatRoom.module.css';
import Link from 'next/link';
import ChatListItem from './chatListItem';
import ScrollElement from './scrollElement';
import TabPaneChat from './tabPaneChat';
import SendMessage from './sendMessage';


export default function ChatRoom({ currentUser, users }) {

    return (
        <>
            {(currentUser && users) && (
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
                                    {users.map((user) =>
                                        <ChatListItem
                                            user_id={user._id}
                                            key={user._id}
                                            href={"#" + user._id}
                                            imgSrc={user.image}
                                            userName={user.firstName + ' ' + user.lastName}

                                        />)}

                                </ul>

                            </div>
                        </div>
                        <div
                            className={`${styles.messageView} col-md-7`}
                        >
                            <div
                                className={`${styles.scrollWrapper} ${styles.tabContent} tab-content`}
                            >
                                <div
                                    className={`${styles.tabContentInner} tab-content`}
                                >
                                    <TabPaneChat tabId='contact-1' />
                                    <TabPaneChat tabId='contact-2' />
                                    <TabPaneChat tabId='contact-3' />
                                    <TabPaneChat tabId='contact-4' />
                                    <TabPaneChat tabId='contact-5' />
                                    <TabPaneChat tabId='contact-6' />

                                </div>

                            </div>
                            <SendMessage />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            )}
        </>

    );
}
