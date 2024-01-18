import styles from './chatRoom.module.css';
import Link from 'next/link';
import ChatListItem from './chatListItem';
import ScrollElement from './scrollElement';
import TabPaneChat from './tabPaneChat';
import SendMessage from './sendMessage';

export default function ChatRoom({ currentUser }) {
    return (
        <div className="chatRoom">
            <div
                className={`${styles.row} row`}
            >
                <div
                    className={`${styles.chatList} col-md-5`}
                >
                    <div
                        className={`${styles.scrollWrapper} ${styles.contactList} scroll-wrapper nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer`}
                    >
                        <ul
                            className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer scroll-content scroll-scrolly_visible"
                        >
                            <ChatListItem href="#contact-1" />
                            <ChatListItem href="#contact-2" />
                            <ChatListItem href="#contact-3" />
                            <ChatListItem href="#contact-4" />
                            <ChatListItem href="#contact-5" />
                            <ChatListItem href="#contact-6" />
                        </ul>
                        <ScrollElement scrollXorY="X" />
                        <ScrollElement scrollXorY="Y" />
                    </div>
                </div>
                <div
                    className={`${styles.messageView} col-md-7`}
                >
                    <div
                        className={`${styles.scrollWrapper} ${styles.tabContent} scroll-wrapper tab-content scrollbar-wrapper wrapper scrollbar-outer`}
                    >
                        <div
                            className={`${styles.tabContentInner} tab-content scrollbar-wrapper wrapper scrollbar-outer scroll-content scroll-scrolly_visible`}
                        >
                            <TabPaneChat tabId='contact-1' />
                            <TabPaneChat tabId='contact-2' />
                            <TabPaneChat tabId='contact-3' />
                            <TabPaneChat tabId='contact-4' />
                            <TabPaneChat tabId='contact-5' />
                            <TabPaneChat tabId='contact-6' />

                        </div>
                        <ScrollElement scrollXorY="X" />
                        <ScrollElement scrollXorY="Y" />
                    </div>
                    <SendMessage />
                </div>
                <div className="clearfix" />
            </div>
        </div>
    );
}
