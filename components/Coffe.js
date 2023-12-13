import { BlurView } from "expo-blur";
import { Dimensions, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const Coffe = ({ image, rating, name, included, price }) => {
  return (
    <View
      style={{
        width: width / 2 - 35,
        marginBottom: 10,
        borderRadius: 30,
        overflow: "hidden",
        backgroundColor: "#ffffff44",
      }}
    >
      <BlurView tint="dark" intensity={95} style={{ padding: 10 }}>
        <TouchableOpacity style={{ height: 150, width: "100%" }}>
          <Image
            source={image}
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
          ></Image>
          <View
            style={{
              position: "absolute",
              right: 0,
              borderBottomStartRadius: 30,
              borderTopEndRadius: 20,
              overflow: "hidden",
            }}
          >
            <BlurView
              tint="dark"
              intensity={70}
              style={{
                flexDirection: "row",
                padding: 8,
                paddingLeft: 12,
                gap: 5,
              }}
            >
              <Ionicons name="star" color={"#E63946"} size={17}></Ionicons>
              <Text style={{ color: "white" }}>{rating}</Text>
            </BlurView>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 17,
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          {name}
        </Text>
        <Text numberOfLines={1} style={{ color: "white" }}>
          {included}
        </Text>
        <View
          style={{
            marginVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#E63946", fontSize: 16 }}>$</Text>
            <Text style={{ color: "white", fontSize: 18 }}>{price}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#E63946",
              padding: 5,
            }}
          >
            <Ionicons name="add" size={12} color={"white"}></Ionicons>
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
};

export default Coffe;
