import io from "socket.io-client";
import { createContext, useState } from "react";
const socket = io("http://localhost:3001");
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [room, setRoom] = useState("");
  const [myUsername, setMyUsername] = useState("");

  return (
    <SocketContext.Provider
      value={{ socket, room, setRoom, myUsername, setMyUsername }}
    >
      {children}
    </SocketContext.Provider>
  );
};
