import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  asset,
  VrButton,
} from "react-360";

import sonidos from "./components/Sonidos";
const { AudioModule } = NativeModules;
export default class lovetest extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        {sonidos.map((item, index) => (
          <VrButton
            onClick={() => {
              AudioModule.playOneShot({
                source: asset(`${item.sound}`),
                is3d: true,
                position: [
                  Math.floor(Math.random() * 3) + 1,
                  Math.floor(Math.random() * 3) + 1,
                  0,
                ],
              });
            }}
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 150,
              height: 150,
              borderRadius: 75,
              padding: 0,
              backgroundColor: item.color,
              borderColor: "#373854",
              borderWidth: 4,
              position: "absolute",
              left: Math.floor(Math.random() * 3946) + 1,
              top: Math.floor(Math.random() * 930) + 1,
            }}
          ></VrButton>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: "red",
  },
  panel: {
    // Fill the entire surface
    width: 4096,
    height: 1080,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
});

AppRegistry.registerComponent("lovetest", () => lovetest);
