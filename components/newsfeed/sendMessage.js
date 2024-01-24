'use client'
import { sendMessage, updateFromSocket } from '@/utils/features/chatSlice';
import styles from './sendMessage.module.css';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { updateLastMessageForFriends } from '@/utils/features/friendsSlice';

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");
}

let socket;

export default function SendMessage({ currentUser, conversations, setIsUserTyping }) {
    const [message, setMessage] = useState('');
    const [receiverId, setReceiverId] = useState(null);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useAppDispatch();

    // console.log(conversations);

    useEffect(() => {
        // Initialize socket only on the client
        if (io) {
            setRoomId(conversations.chatId);

            socketInitializer();

            return () => {
                if (socket) {
                    socket.disconnect();
                }
            };
        }

    }, [conversations, roomId]);

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

            const activeTabUserId = $("#chatroomMessageView")?.find(".tab-pane.active.show")?.attr("id");

            setReceiverId(activeTabUserId);

            socket = io();

            socket.on("connect", () => {
                const currentUserId = currentUser.id;


                // console.log(userId, roomId);

                // Emit join-room event when the component mounts
                socket.emit("join-room", { roomId, currentUserId, receiverId });


            });

            socket.on("user-typing", (data) => {
                // console.log("Typing ==> ", data);
                if (data.receiverId === currentUser.id) {
                    setIsUserTyping(data.isTyping);
                    setTimeout(() => {
                        const lastLi = $(".tab-pane.active.show .chat-body li:last");

                        // console.log(lastLi);

                        if (lastLi.length > 0) {
                            const container = $(".chatRoom_tabContent__sPppD");
                            const scrollTo = lastLi.position().top + container.scrollTop();

                            container.animate({
                                scrollTop: scrollTo
                            }, 1000);
                        }
                    }, 1000);
                }

            });


            socket.on("receive-message", (data) => {
                // console.log("Received message:", data);

                setIsUserTyping(false);

                dispatch(updateFromSocket({ chat: data.payload.chat }));

                dispatch(updateLastMessageForFriends({ friendId: receiverId, lastMessage: message }));

                setTimeout(() => {
                    const lastLi = $(".chat-body li:last");

                    if (lastLi.length > 0) {
                        const container = $(".chatRoom_tabContent__sPppD");
                        const scrollTo = lastLi.position().top + container.scrollTop();

                        container.animate({
                            scrollTop: scrollTo
                        }, 1000);
                    }
                }, 1000);

            });

        }
    }

    const handleImageLinkClick = (e) => {
        e.preventDefault();

        $("#imageInputSendMessage").click();

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    const handleImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        setSelectedImage(file); //Set the selected file in selectedImage

    };

    const handleRemoveImage = () => {
        $("#imageInputSendMessage").val('');

        URL.revokeObjectURL(URL.createObjectURL(selectedImage));

        setSelectedImage(null);

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    const handleMessageChange = (e) => {
        const newMessage = e.target.value;

        setMessage(newMessage);

        // console.log(socket);

        if (socket) {
            const currentUserId = currentUser.id;

            // console.log(currentUserId, roomId, receiverId, newMessage.trim() !== '');

            // Emit send-message event with user details and room ID
            socket.emit("typing", {
                roomId,
                currentUserId,
                receiverId,
                isTyping: newMessage.trim() !== '',
            });
        }

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            // Prevent the default behavior of the Enter key
            e.preventDefault();

            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        console.log(message, receiverId, selectedImage);
        try {
            // Dispatch the addComment action
            dispatch(sendMessage({ receiverId, message, selectedImage }))
                .then((action) => {
                    // Handle success if needed
                    // console.log('Sent message successfully!', action);

                    if (socket) {
                        const currentUserId = currentUser.id;

                        // Emit send-message event with user details and room ID
                        socket.emit("send-message", {
                            payload: action.payload,
                            roomId,
                            currentUserId,
                            receiverId
                        });
                    }

                    dispatch(updateLastMessageForFriends({ friendId: receiverId, lastMessage: message, unreadCount: 0, lastMessageTime: new Date() }));

                    setSelectedImage(null);
                    setMessage('');
                    // setReceiverId(null);

                    const lastLi = $(".chat-body li:last");

                    if (lastLi.length > 0) {
                        const container = $(".chatRoom_tabContent__sPppD");
                        const scrollTo = lastLi.position().top + container.scrollTop();

                        container.animate({
                            scrollTop: scrollTo
                        }, 1000);
                    }

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
                <Link
                    href="#"
                    onClick={handleImageLinkClick}
                >
                    <Icon icon="entypo:images" color='#000' />
                </Link>
                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    id="imageInputSendMessage"
                    className={styles.hiddenFileInput}
                    onChange={handleImageChange}
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

            {selectedImage && (
                <div className={`${styles.imageUploadOuter} imageUploadOuter`}>
                    <div className={styles.imageOuter}>
                        <div className={`${styles.removeImage} removeImage`} onClick={handleRemoveImage}>
                            <Icon icon="clarity:remove-solid" width='1.5em' height='1.5em' />
                        </div>
                        <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                    </div>
                </div>
            )}

        </div>
    )
};