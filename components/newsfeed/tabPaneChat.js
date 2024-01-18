import styles from './tabPaneChat.module.css';
import ChatSingleMessage from './chatSingleMessage';

export default function TabPaneChat({ tabId }) {
    return (
        <div
            id={tabId}
            className="tab-pane"

        >
            <div className="chat-body">
                <ul
                    className={`${styles.chatMessage} chat-message`}

                >
                    <ChatSingleMessage leftOrRight='left' />
                    <ChatSingleMessage leftOrRight='right' />
                    <ChatSingleMessage leftOrRight='right' />
                    <ChatSingleMessage leftOrRight='left' />
                    <ChatSingleMessage leftOrRight='right' />
                    <ChatSingleMessage leftOrRight='left' />
                </ul>
            </div>
        </div>
    )
};