import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export default function Bank() {
  return (
    <View style={styles.container}>
      <Text>Bank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    padding: 20,
  },
});
