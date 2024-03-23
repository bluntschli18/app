import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formDataAtom } from "../theAtom/formAtom";
import { useAtom } from "jotai";

export default ProfileScreen = () => {
    const [formData] = useAtom(formDataAtom);

    return (
        <View style={styles.container}>
            <Text style={styles.txt} > Name: {formData.firstName} {formData.lastName}</Text>
            <Text style={styles.txt} >Email: {formData.email}</Text>
            <Text style={styles.txt} >Address:  {formData.address}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    txt: {
        color: "gray",
        fontSize: 14,
    },
});
