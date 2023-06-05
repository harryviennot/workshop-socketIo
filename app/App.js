import { SocketProvider } from "./contexts/SocketContext";
import Chat from "./components/Chat";

const App = () => {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  );
};

export default App;
