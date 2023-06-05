import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";

import { SocketContext } from "../contexts/SocketContext";

const Chat = () => {
  const { socket, room, setRoom } = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const joinChat = () => {};

  const sendMessage = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Simple Chat</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Room"
        style={styles.input}
        value={room}
        onChangeText={(text) => setRoom(text)}
      />
      <TouchableOpacity style={styles.button} onPress={joinChat}>
        <Text>Join Room</Text>
      </TouchableOpacity>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>
              {item.username}: {item.message}
            </Text>
          </View>
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
    width: "80%",
    margin: 5,
  },
  button: {
    backgroundColor: "#abc",
    borderRadius: 10,
    padding: 10,
    width: "80%",
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
