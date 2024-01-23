import { Server } from "socket.io";
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";

export default async function SocketHandler(req, res) {

    const session = await getServerSession(req, res, authOptions)

    // console.log("session ==> ", session);

    if (res.socket.server.io) {
        // console.log("res", res);
        console.log("Already set up");
        res.end();
        return;
    }
    // console.log(res.socket.server);
    const io = new Server(res.socket.server);
    // console.log("io", io);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
        console.log("Client connected");
        // Verify user identity

        if (!session?.user) {
            throw new Error("User not authenticated");
        }

        // User is authenticated
        socket.on("join-room", ({ roomId, currentUserId, receiverId }) => {
            // console.log("Room id, User id ==> ", roomId, currentUserId, receiverId);

            // console.log(session.user.id, currentUserId, receiverId);

            if (!(session.user.id === currentUserId || session.user.id === receiverId)) {
                throw new Error("Invalid user trying to join room");
            }

            socket.join(roomId);

            // console.log(`Users ${currentUserId} ${receiverId} joined room ${roomId}`);

        });

        socket.on("typing", (data) => {
            // console.log("Received typing:", data);
            const chatRoom = io.to(data.roomId);
            chatRoom.emit("user-typing", data);
        });

        socket.on("send-message", (data) => {
            // console.log("Received message:", data);
            const chatRoom = io.to(data.roomId);
            chatRoom.emit("receive-message", data);
        });

    });

    console.log("Setting up socket");
    res.end();
}
