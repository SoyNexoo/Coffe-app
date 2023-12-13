import { BlurView } from "expo-blur";
import { Dimensions, View, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");
const Coffe = () => {
  return (
    <View style={{ width: width / 2 - 20 }}>
      <BlurView>
        <TouchableOpacity
          style={{ height: 150, width: "100%" }}
        ></TouchableOpacity>
      </BlurView>
    </View>
  );
};

export default Coffe;
