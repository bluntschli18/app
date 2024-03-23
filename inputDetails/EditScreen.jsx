import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useAtom } from "jotai";
import React from "react";
import { formDataAtom } from "../theAtom/formAtom";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const Navigation = useNavigation(true);
  const [formData, setFormData] = useAtom(formDataAtom);
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleSubmit = () => {
    Navigation.navigate("MyProfile");
    console.log("The Data is: ");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        placeholderTextColor="gray"
        value={formData.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        placeholderTextColor="gray"
        value={formData.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email Adress"
        placeholderTextColor="gray"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Adress"
        placeholderTextColor="gray"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <TouchableOpacity style={styles.touch} onPress={handleSubmit}>
        <Text style={styles.ttxt}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#000",
  },

  textInput: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    padding: 10,
    color: "gray",
    borderWidth: 1,
    borderColor: "gray",
  },
  touch: {
    height: 50,
    backgroundColor: "gray",
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
