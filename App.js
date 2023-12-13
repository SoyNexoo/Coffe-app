import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121311",
  },
});
