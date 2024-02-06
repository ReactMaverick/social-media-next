import { Server } from "socket.io";
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/utils/auth";

export default async function SocketHandler(req, res) {
    try {
        const session = await getServerSession(req, res, authOptions)

        // console.log("session ==> ", session);

        if (res.socket.server.io) {
            // console.log("res", res);
            // console.log("Already set up socket");
            res.end();
            return;
        }

        // console.log(res.socket.server);
        const io = new Server(res.socket.server);
        // console.log("io", io);
        res.socket.server.io = io;

        io.on("connection", (socket) => {
            // console.log("Client connected");
            // Verify user identity

            // console.log("session inside on connection ==> ", session);

            if (!session?.user) {
                // throw new Error("User not authenticated");
                return
            }

            // User is authenticated
            socket.on("join-newsfeed-room", ({ userRoomId, friends }) => {
                // console.log("session inside join newsfeed room ==> ", session);
                // console.log("session user id ==> ", session.user.id);
                // console.log("User Room Id ===> ", userRoomId);
                // console.log("Friends ===> ", friends);

                const isUserFriend = friends?.some((friend) => friend?.friend?._id === session.user.id);

                // console.log("is user friend ==> ", isUserFriend);

                // console.log("Condition ==> ", session.user.id === userRoomId);

                if (!(session.user.id === userRoomId || isUserFriend)) {
                    // Send an error response back to the client
                    throw new Error("Invalid user trying to join room");
                }

                socket.join(userRoomId);

                friends.forEach((friend) => {
                    socket.join(friend?.friend?._id);
                })

                const usersInUserRoom = io.sockets.adapter.rooms.get(userRoomId);
                // console.log(`Users in room ${userRoomId}:`, usersInUserRoom);

            })

            // Example: Send a post to all friends
            socket.on('publish-post', ({ post, friends, postedUserId }) => {
                // console.log("Post ==> ", post);

                // console.log("Friends ===> ", friends);
                friends.forEach((friend) => {
                    // Emit the post data to each friend's room
                    const friendRoom = io.to(friend.friend._id);
                    friendRoom.emit('new-post', { post, postedUserId });
                });
            });

            // Example: Send a post comment to all friends
            socket.on('delete-post', ({ postId, friends, postedUserId }) => {
                // console.log("PostId ==> ", postId, postedUserId);

                // console.log("Friends ===> ", friends);

                friends.forEach((friend) => {
                    // Emit the post data to each friend's room
                    const friendRoom = io.to(friend.friend._id);
                    friendRoom.emit('new-post-delete', { postId, postedUserId });
                });
            });

            // Example: Send a post to all friends
            socket.on('publish-post-comment', ({ postId, friends, postedUserId, newCommentId, comment }) => {
                // console.log("Comment ==> ", comment);

                // console.log("Friends ===> ", friends);
                friends.forEach((friend) => {
                    // Emit the post data to each friend's room
                    const friendRoom = io.to(friend.friend._id);
                    friendRoom.emit('new-post-comment', { postId, postedUserId, newCommentId, comment });
                });
            });

            // User is authenticated
            socket.on("join-room", ({ roomId, currentUserId, receiverId }) => {
                // console.log("Room id, User id ==> ", roomId, currentUserId, receiverId);

                // console.log(session.user.id, currentUserId, receiverId);

                if (!(session.user.id === currentUserId || session.user.id === receiverId)) {
                    // throw new Error("Invalid user trying to join room");
                    return
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

        // console.log("Setting up socket");
        res.end();
    } catch (error) {
        console.error(error);
    }


}
