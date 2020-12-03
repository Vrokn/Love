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
      <View>
        {sonidos.map((item, index) => (
          <VrButton
            onClick={() => {
              AudioModule.playOneShot({
                source: asset(`${item.sound}`),
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
              left: Math.floor(Math.random() * 4400) + 150,
              top: Math.floor(Math.random() * 1000) + 150,
            }}
          >
         </VrButton>
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
    width: 4000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("lovetest", () => lovetest);
