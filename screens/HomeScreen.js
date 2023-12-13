import { BlurView } from "expo-blur";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffes from "../components/Coffes";
import Coffe from "../components/Coffe";
import { useState } from "react";

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 15,
              overflow: "hidden",
              width: 40,
              height: 40,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="menu" size={30} color={"#fef"}></Ionicons>
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              overflow: "hidden",
              borderRadius: 20,
            }}
          >
            <BlurView style={{ height: "100%", padding: 5 }}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/espokemon/images/e/e3/Squirtle.png/revision/latest?cb=20160309230820",
                }}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              />
            </BlurView>
          </View>
        </View>
        <View style={{ width: "90%", marginVertical: 30 }}>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "600" }}>
            <Text style={{ color: "#E63946" }}>Encuentra</Text> el mejor cafe{" "}
            para <Text style={{ color: "#E63946" }}>ti</Text>!
          </Text>
        </View>
        <SearchField></SearchField>
        <Categories onChange={(id) => setActiveCategoryId(id)}></Categories>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 50,
          }}
        >
          {coffes
            .filter((coffee) => {
              if (activeCategoryId === null) return true;
              return coffee.categoryId === activeCategoryId;
            })
            .map((ele) => (
              <Coffe
                key={ele.id}
                image={ele.image}
                rating={ele.rating}
                name={ele.name}
                included={ele.included}
                price={ele.price}
              ></Coffe>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
