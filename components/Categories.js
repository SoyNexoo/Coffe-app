import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

const categories = [
  {
    id: null,
    name: "Todos",
  },
  {
    id: 1,
    name: "Cappuccino",
  },
  {
    id: 2,
    name: "Espresso",
  },
  { id: 3, name: "Latte" },
  {
    id: 4,
    name: "Flat White",
  },
];

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal={true}
      data={categories}
      contentContainerStyle={{ marginVertical: 10 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: 20 }}
        >
          <Text
            style={[
              { color: "#757780", fontSize: 20 },
              activeCategoryId === item.id && { color: "#E63946" },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "#DF515D",
                marginTop: 5,
              }}
            ></View>
          )}
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default Categories;
