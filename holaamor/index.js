import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class holaamor extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 0,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent("holaamor", () => holaamor);
