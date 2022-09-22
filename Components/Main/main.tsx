import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

export default function MainScreen() {
  const [data, setData] = useState([]);
  // const user_id = data['user_id'];
  // const joinSessionPost = () => {
  //   fetch("https://localhost:8000/api/users/join_session", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,

  //       data['user_id']:,
  //       session_id,
  //       role: member
  //     }),
  //   })
  // };

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((response) => response.text())
      .then((json) => setData([json]))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.TextInput}>{data}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={[styles.sessionBtn, { justifyContent: "flex-start" }]}
          >
            <Text style={styles.loginText}> + Create Session</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={[styles.sessionBtn, { justifyContent: "flex-end" }]}
            // onPress={joinSessionPost}
          >
            <Text style={styles.loginText}> + Join Session</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
