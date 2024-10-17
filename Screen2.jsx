import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native";
import { Text, TextInput } from "react-native-web";

export default function Screen2({ navigation }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      cate: "Vegetable",
      img: require("./assets/tao.jpg"),
    },
    {
      id: 2,
      name: "Pear",
      cate: "Vegetable",
      img: require("./assets/le.jpg"),
    },
    {
      id: 3,
      name: "Coconut",
      cate: "Vegetable",
      img: require("./assets/dua.jpg"),
    },
    {
      id: 4,
      name: "Orange",
      cate: "Drinks",
      img: require("./assets/cam.jpg"),
    },
    {
      id: 5,
      name: "Milk",
      cate: "Drinks",
      img: require("./assets/tao.jpg"),
    },
  ];
  const Item = ({ obj }) => {
    return (
      <View style={styles.item}>
        <Image source={obj.img} style={{ width: 100, height: 100 }} />
        <Text>{obj.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", padding: 10, width: "100%" }}>
        <TextInput placeholder="Search" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.cate}>
          <Text>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cate}>
          <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cate}>
          <Text>Drinks</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Order your favorite!</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Item obj={item}></Item>}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    gap: 20,
  },
  item: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 10,
    shadowOpacity: 0.25,
    flexGrow: 1,
  },
  cate: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    margin: 10,
  },
});
