import { io } from "socket.io-client";

const socket = io("https://chatapp-backend-pp2d.onrender.com", {
  withCredentials: true, // ✅ send cookies with request
});

export default socket;
