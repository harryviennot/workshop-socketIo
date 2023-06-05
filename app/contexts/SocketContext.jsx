import io from "socket.io-client";
import { createContext, useState } from "react";
// initiez le socket ici
// socket =
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [room, setRoom] = useState("");

  return (
    <SocketContext.Provider value={{ room, setRoom }}>
      {children}
    </SocketContext.Provider>
  );
};
