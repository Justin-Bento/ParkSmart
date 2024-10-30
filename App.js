<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> d52c1f7337cdb8b9aa2041ccf278ec5dacac5ffc

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: "64px",
<<<<<<< HEAD
    fontWeight: "bold",
=======
    fontWeight: 'bold',
>>>>>>> d52c1f7337cdb8b9aa2041ccf278ec5dacac5ffc
    color: "blue",
  },
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> d52c1f7337cdb8b9aa2041ccf278ec5dacac5ffc
  },
});
