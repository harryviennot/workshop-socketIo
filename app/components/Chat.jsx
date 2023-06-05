import React, { useState, useEffect, useContext, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";

import { SocketContext } from "../contexts/SocketContext";
import Message from "./Message";

const Chat = () => {
  const flatListRef = useRef();
  const { socket, room, setRoom } = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const joinChat = () => {};

  const sendMessage = () => {};

  const sendToAll = () => {};

  useEffect(() => {
    const onRecieveMessage = (data) => {};

    socket.on("receiveMessage", onRecieveMessage);

    return () => {
      socket.off("receiveMessage", onRecieveMessage);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>SocketIo Chat</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={myUsername}
        onChangeText={(text) => setMyUsername(text)}
      />
      <TextInput
        placeholder="Room"
        style={styles.input}
        value={currentRoom}
        onChangeText={(text) => setCurrentRoom(text)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={joinChat}>
        <Text>Join Room</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        onContentSizeChange={() =>
          messages.length > 0 &&
          flatListRef.current.scrollToEnd({ animated: true })
        }
        onLayout={() =>
          messages.length > 0 &&
          flatListRef.current.scrollToEnd({ animated: true })
        }
        style={{ width: "90%" }}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Message message={item.message} username={item.username} />
        )}
      />

      <TextInput
        placeholder="Message"
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text>Send Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendToAll}>
        <Text>Send To All</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "90%",
    margin: 5,
  },
  button: {
    backgroundColor: "#abc",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignItems: "center",
    margin: 5,
  },
  message: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignSelf: "flex-start",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
});
