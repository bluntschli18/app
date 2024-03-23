import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default SupportScreen = () => {
  const Navigation = useNavigation(true);
  return (
    <View style={styles.container}>
      <View style={styles.SCont}>
        <Ionicons
          onPress={() => Navigation.goBack(true)}
          name="chevron-back"
          style={styles.cbk}
        />
        <Text style={styles.stxt}>Support</Text>
      </View>

      <Image
        source={require("./../assets/support1.1.1.png")}
        style={styles.image}
      />
      <View style={styles.vCont}>
        <Text style={styles.vtxt}>CoinPay Support</Text>
        <Text style={styles.vstxt}>
          Our dedicated team is gere to assist you with any questions or issues
          reated to our Coinpay mobile app
        </Text>
      </View>
      <TouchableOpacity style={styles.touch}>
        <Ionicons name="chatbubble" style={styles.cbk} />
        <Text style={styles.ttxt}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 40,
  },
  SCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000",
    padding: 20,
    gap: 100,
  },
  cbk: {
    color: "white",
    fontSize: 25,
  },
  stxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
  },
  ttxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 30,
  },
  vCont: {
    padding: 20,
  },
  vtxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  vstxt: {
    color: "grey",
    alignSelf: "center",
    fontSize: 16,
    textAlign: "center",
  },
  touch: {
    backgroundColor: "blue",
    width: "90%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 70,
  },
});
