import styles from './tabPaneChat.module.css';
import ChatSingleMessage from './chatSingleMessage';
import { getTimeElapsed } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

export default function TabPaneChat({ currentUser, tabId, conversations, isUserTyping, setActiveTab, activeTab }) {
    // console.log("Conversations in TabPaneChat ==> ", conversations, tabId);

    const [userImg, setUserImg] = useState('');
    const [isUserImgSet, setIsUserImgSet] = useState(false);

    const tabRef = useRef(null);

    useEffect(() => {
        // console.log("Conversations updated in tabpanechat component", conversations);
    }, [conversations]);

    // console.log("convos ==> ", conversations);

    const isConversationActive = conversations?.chats?.some((conversation) => conversation.receiver._id === tabId || conversation.sender._id === tabId)

    // const isConversationActive = true;

    // console.log(isUserTyping);

    const isActiveTab = tabRef?.current?.classList?.contains('active');

    useEffect(() => {
        if (isActiveTab && tabId !== activeTab) {
            setActiveTab(tabId);
        }
    }, [isActiveTab, activeTab, tabId]);

    return (

        <div
            id={tabId}
            className={`tab-pane ${isConversationActive ? 'active show' : ''}`}
            role='tabpanel'
            ref={tabRef}
        >
            <div className="chat-body">
                <ul
                    className={`${styles.chatMessage} chat-message`}

                >
                    {conversations?.chats?.length ? conversations.chats.map((conversation) => {
                        const isCurrentUserSender = conversation.sender._id === currentUser.id;
                        const isCurrentUserReceiver = conversation.receiver._id === currentUser.id;
                        const isParticipantIdMatch = conversation.receiver._id === tabId || conversation.sender._id === tabId;

                        if (!isCurrentUserSender && isUserImgSet) {
                            setUserImg(conversation.sender.image)
                            setIsUserImgSet(true)
                        }

                        if (isParticipantIdMatch && (isCurrentUserSender || isCurrentUserReceiver)) {
                            return (
                                <ChatSingleMessage
                                    key={conversation._id}
                                    leftOrRight={isCurrentUserSender ? 'right' : 'left'}
                                    userImg={conversation.sender.image}
                                    userName={conversation.sender.firstName + ' ' + conversation.sender.lastName}
                                    timeElapsed={getTimeElapsed(conversation.createdAt)}
                                    message={conversation.message}
                                    image={conversation.image}
                                />
                            );
                        }

                        return null; // Return null if the condition is not met
                    }) :
                        <p>No conversations available</p>
                    }

                    {isUserTyping &&
                        <ChatSingleMessage
                            leftOrRight='left'
                            userImg={userImg}
                            message={isUserTyping ? 'typing....' : ''}
                            isUserTyping={isUserTyping}
                        />
                    }
                </ul>
            </div>
        </div>
    )
};