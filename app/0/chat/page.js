"use client";

import { useEffect, useState } from "react";

// Import io conditionally to avoid importing it on the server
let io;
if (typeof window !== "undefined") {
    io = require("socket.io-client");
}

let socket;

export default function Chat() {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const [isSocketInitilized, setIsSocketInitialized] = useState(false);

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
    }, []);

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
                setAllMessages((pre) => [...pre, data]);
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (socket) {
            console.log("emitted");

            socket.emit("send-message", {
                username,
                message,
            });

            setMessage("");
        }
    }

    return (
        <div>
            <h1>Chat app</h1>

            <input
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <div>
                {allMessages.map(({ username, message }, index) => (
                    <div key={index}>
                        {username}: {message}
                    </div>
                ))}

                <br />

                <form onSubmit={handleSubmit}>
                    <input
                        name="message"
                        placeholder="enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        autoComplete={"off"}
                    />

                    <br />
                    <br />

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

