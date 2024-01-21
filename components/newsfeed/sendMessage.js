'use client'
import { sendMessage, updateFromSocket } from '@/utils/features/chatSlice';
import styles from './sendMessage.module.css';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConversations, selectConversations } from '@/utils/features/chatSlice';

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");
}

let socket;

export default function SendMessage({ currentUser, conversations }) {
    const [message, setMessage] = useState('');
    const [receiverId, setReceiverId] = useState(null);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // Initialize socket only on the client
        if (io) {
            socketInitializer();

            return () => {
                if (socket) {
                    socket.disconnect();
                }
            };
        }
    }, [conversations]);

    if (!isSocketInitilized) {
        const fetchCall = async () => {
            await fetch('/api/socket');
        };

        fetchCall();

        setIsSocketInitialized(true);
    };

    async function socketInitializer() {
        // Fetch data only on the client
        if (typeof window !== "undefined") {

            console.log("Initializing socket");

            socket = io();

            socket.on("receive-message", (data) => {
                const isConversationOpened = conversations.some((conversation) => conversation.sender._id === data.payload.sender._id || conversation.receiver._id === data.payload.sender._id);

                // console.log(isConversationOpened, conversations, data.payload);

                if (currentUser.id === data.payload.receiver._id && isConversationOpened) {
                    // console.log("Data ===> ", data);
                    // console.log("Previous Conversations ==> ", conversations);
                    dispatch(updateFromSocket({ conversation: data.payload }));
                };

            });
        }
    }


    const handleMessageChange = (e) => {
        const newMessage = e.target.value;

        setMessage(newMessage);

        const activeTabUserId = $(e.target)?.closest("#chatroomMessageView")?.find(".tab-pane.active.show")?.attr("id");

        setReceiverId(activeTabUserId);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            // Prevent the default behavior of the Enter key
            e.preventDefault();

            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        // console.log(message, receiverId);
        try {
            // Dispatch the addComment action
            dispatch(sendMessage({ receiverId, message }))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Sent message successfully!', action);

                    if (socket) {
                        console.log("emitted");

                        socket.emit("send-message", {
                            payload: action.payload,
                        });

                    }

                    setMessage('');
                    setReceiverId(null);
                })
                .catch((error) => {
                    // Handle error if needed
                    console.error('Error sending message:', error);
                });

        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div
            className={`${styles.sendMessage} send-message`}

        >
            <div
                className={`${styles.inputGroup} input-group`}

            >
                <input
                    className={`${styles.formControl} form-control`}
                    type="text"
                    placeholder="Type your message"
                    value={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                />
                <span
                    className={`${styles.inputGroupBtn} input-group-btn`}

                >
                    <button
                        className={`${styles.btn} btn btn-default`}
                        type="button"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </span>
            </div>
        </div>
    )
};