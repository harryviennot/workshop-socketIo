import io from "socket.io-client";
import { createContext, useState } from "react";
// initiez le socket ici
// socket =
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [roomPin, setRoomPin] = useState("");

  return (
    <SocketContext.Provider value={{ socket, roomPin, setRoomPin }}>
      {children}
    </SocketContext.Provider>
  );
};
