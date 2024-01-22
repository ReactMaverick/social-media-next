import styles from './tabPaneChat.module.css';
import ChatSingleMessage from './chatSingleMessage';
import { getTimeElapsed } from '@/utils/common';
import { useEffect, useState } from 'react';

export default function TabPaneChat({ currentUser, tabId, conversations }) {
    // console.log("Conversations in TabPaneChat ==> ", conversations, tabId);

    useEffect(() => {
        console.log("Conversations updated in tabpanechat component", conversations);
    }, [conversations]);

    // console.log("convos ==> ", conversations);

    const isConversationActive = conversations.some((conversation) => conversation.receiver._id === tabId || conversation.sender._id === tabId)

    return (

        <div
            id={tabId}
            className={`tab-pane ${isConversationActive ? 'active show' : ''}`}
            role='tabpanel'
        >
            <div className="chat-body">
                <ul
                    className={`${styles.chatMessage} chat-message`}

                >
                    {conversations.length ? conversations.map((conversation) => {
                        const isCurrentUserSender = conversation.sender._id === currentUser.id;
                        const isCurrentUserReceiver = conversation.receiver._id === currentUser.id;
                        const isParticipantIdMatch = conversation.receiver._id === tabId || conversation.sender._id === tabId;

                        if (isParticipantIdMatch && (isCurrentUserSender || isCurrentUserReceiver)) {
                            return (
                                <ChatSingleMessage
                                    key={conversation._id}
                                    leftOrRight={isCurrentUserSender ? 'right' : 'left'}
                                    userImg={conversation.sender.image}
                                    userName={conversation.sender.firstName + ' ' + conversation.sender.lastName}
                                    timeElapsed={getTimeElapsed(conversation.createdAt)}
                                    message={conversation.message}
                                />
                            );
                        }

                        return null; // Return null if the condition is not met
                    }) :
                        <p>No conversations available</p>
                    }
                </ul>
            </div>
        </div>
    )
};