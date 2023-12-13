import { BlurView } from "expo-blur";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchField = () => {
  return (
    <View style={{ borderRadius: 20, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          style={{
            width: "100%",
            color: "white",
            padding: 10,
            fontSize: 17,
            paddingLeft: 30,
          }}
          placeholder="Busca tu cafe..."
          placeholderTextColor={"gray"}
        />
        <Ionicons
          name="search"
          color={"gray"}
          size={20}
          style={{ position: "absolute", left: 5 }}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;
