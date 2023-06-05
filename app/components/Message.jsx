import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SocketContext } from "../contexts/SocketContext";

const Message = ({ message, username }) => {
  const { myUsername } = useContext(SocketContext);
  const [isMyMessage, setIsMyMessage] = useState(false);

  useEffect(() => {
    if (username !== myUsername) {
      setIsMyMessage(false);
    } else {
      setIsMyMessage(true);
    }
  }, [username]);

  return (
    <View style={styles.messageContainer}>
      <View style={isMyMessage ? styles.myMessage : styles.otherMessage}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    width: "100%",
    padding: 10,
  },
  myMessage: {
    backgroundColor: "#e6e6e6",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  otherMessage: {
    backgroundColor: "#e6e6e6",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {},
});
