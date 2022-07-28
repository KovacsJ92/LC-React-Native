import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  text,
  TextInput,
  onChangeText,
  View,
  Pressable,
  FlatList,
} from "react-native";

// import IconSettings from './IconSettings';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  function onPress() {
    Alert.alert("Touchable opacity pressed");
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text styles={{ color: "red" }}>
        Open edit this up App.js to start working on your app!
      </Text>
      <Button
        title="Press me"
        color="red"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>
          {/* <IconSettings width={16} height={16} /> */}
          <Ionicons name="ios-settings" size={24} color="black" />
        </Text>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <View styles={{ marginTop: 60 }}>
        <Pressable
          style={styles.button}
          onPressIn={() => console.log("pressing in")}
          onPressOut={() => console.log("pressing out")}
          onLongPress={() => console.log("long press")}
          hitSlop={20}
        >
          <Text>Pressable Here</Text>
        </Pressable>
      </View>
      <View>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Text>{text}</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    marginTop: 60,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 300,
    padding: 10,
  },
});
