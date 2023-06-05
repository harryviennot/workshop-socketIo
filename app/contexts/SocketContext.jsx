import io from "socket.io-client";
import { createContext, useState } from "react";
// initiez le socket
// socket = url de votre serveur node
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [room, setRoom] = useState("");

  return (
    <SocketContext.Provider value={{ socket, room, setRoom }}>
      {children}
    </SocketContext.Provider>
  );
};
