import { SocketProvider } from "./contexts/SocketContext";

import Chat from "./components/Chat";
import { View, Text } from "react-native";

const App = () => {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  );
};

export default App;
