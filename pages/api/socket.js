import { Server } from "socket.io";

export default function SocketHandler(req, res) {
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
        socket.on("send-message", (obj) => {
            io.emit("receive-message", obj);
        });
    });

    console.log("Setting up socket");
    res.end();
}
