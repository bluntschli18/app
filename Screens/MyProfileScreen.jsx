import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { formDataAtom } from "../theAtom/formAtom";
import { useAtom } from "jotai";

export default function MyProfileScreen() {
  const [formData] = useAtom(formDataAtom);
  const Navigation = useNavigation(true);
  const handlePersonalInfo = () => {
    Navigation.navigate("PersonalInfo");
    console.log("The User Navigated To His Profile");
  };
  const handleBank = () => {
    Navigation.navigate("Bank");
    console.log("The User Navigated To Bank And Cards");
  };
  const handleTransaction = () => {
    Navigation.navigate("Transaction");
    console.log("The User Navigated To Transactions");
  };
  const handleData = () => {
    Navigation.navigate("DataAndPrivacy");
    console.log("The User Navigated To Data And Privacy");
  };
  const handleEdit = () => {
    Navigation.navigate("Edit");
    console.log("The User Wants to Edit");
  };
  const handleSupport = () => {
    Navigation.navigate("Support");
    console.log("The User Needs Support");
  };
  return (
    <View style={styles.container}>
      {/* This is the first Sub cont */}
      <View style={styles.SCont}>
        <Ionicons
          onPress={() => Navigation.goBack()}
          name="chevron-back"
          style={styles.cbk}
        />
        <Text style={styles.ftxt}>My Profile</Text>
      </View>
      <View style={styles.PCont}>
        <Icon name="edit" style={styles.Icon} onPress={handleEdit} />
        <Image
          style={styles.PImg}
          source={require("./../assets/House1.1.png")}
        />
        <Text style={styles.PItxt}>
          {formData.firstName} {formData.lastName}
        </Text>
        <Text style={styles.PI2txt}>{formData.email}</Text>
        <Text style={styles.PI2txt}>{formData.address}</Text>
      </View>
      {/* The first sub cont ends here */}

      {/* This is the second sub cont */}
      <View style={styles.PSVw}>
        {/* The Personal-info View */}
        <View style={styles.PSVw2}>
          <Image
            source={require("./../assets/Person.png")}
            style={styles.Pimg}
          />
          <Text style={styles.PName} onPress={handlePersonalInfo}>
            Personal Info
          </Text>
          <Ionicons
            name="chevron-forward"
            style={styles.ICO}
            onPress={handlePersonalInfo}
          />
        </View>

        {/* The bank & cards view */}
        <View style={styles.PSVw2}>
          <Image
            source={require("./../assets/Bank1.png")}
            style={styles.Pimg}
          />
          <Text style={styles.PName} onPress={handleBank}>
            Bank & Cards
          </Text>
          <Ionicons
            name="chevron-forward"
            style={styles.ICO1}
            onPress={handleBank}
          />
        </View>

        {/* The transactions view */}
        <View style={styles.PSVw2}>
          <Image source={require("./../assets/trnx.png")} style={styles.Pimg} />
          <Text onPress={handleTransaction} style={styles.PName}>
            Transaction
          </Text>
          <Ionicons
            name="chevron-forward"
            style={styles.ICO2}
            onPress={handleTransaction}
          />
        </View>

        {/* The Data & Privacy View */}
        <View style={styles.PSVw2}>
          <Image
            source={require("./../assets/datapriv.png")}
            style={styles.Pimg}
          />
          <Text style={styles.PName} onPress={handleData}>
            Data Privacy
          </Text>
          <Ionicons
            name="chevron-forward"
            style={styles.ICO3}
            onPress={handleData}
          />
        </View>

        {/* The Support view */}
        <View style={styles.PSVw2i}>
          <Image
            source={require("./../assets/support1.1.1.png")}
            style={styles.Pimg}
          />
          <Text style={styles.PName} onPress={handleSupport}>
            Support
          </Text>
          <Ionicons
            name="chevron-forward"
            style={styles.ICO4}
            onPress={handleSupport}
          />
        </View>
      </View>
      {/* The second sub cont ends here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 60,
    padding: 20,
    gap: 20,
  },
  SCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000",
    gap: 100,
  },
  cbk: {
    color: "white",
    fontSize: 25,
  },
  ftxt: {
    fontSize: 20,
    color: "#fff",
  },
  PCont: {
    backgroundColor: "gray",
    height: 200,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  Icon: {
    fontSize: 20,
    position: "absolute",
    alignSelf: "flex-end",
    right: 20,
    top: 20,
  },
  PImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
  },
  PItxt: {
    fontSize: 14,
    color: "#fff",
  },
  PI2txt: {
    fontSize: 12,
    color: "#000",
  },
  PSVw: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    gap: 20,
  },
  PSVw2: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flexDirection: "row",
    height: "auto",
    alignItems: "center",
    gap: 10,
  },
  PSVw2i: {
    width: "100%",
    paddingHorizontal: 10,
    // borderBottomWidth: 1,
    borderBottomColor: "white",
    flexDirection: "row",
    height: "auto",
    alignItems: "center",
    gap: 10,
  },
  PName: {
    fontSize: 12,
    color: "#fff",
  },
  Pimg: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
  },
  ICO: {
    fontSize: 25,
    color: "white",
    left: 120,
  },
  ICO1: {
    fontSize: 25,
    color: "white",
    left: 118,
  },
  ICO2: {
    fontSize: 25,
    color: "white",
    left: 130,
  },
  ICO3: {
    fontSize: 25,
    color: "white",
    left: 123,
  },
  ICO4: {
    fontSize: 25,
    color: "white",
    left: 155,
  },
});
