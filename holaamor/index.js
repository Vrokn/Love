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
  /*  // Our component will keep track of this state
  state = {
    count: 0,
  };

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Once the component mounts, run the increment method every second
  componentDidMount() {
    console.log(sonidos);
    setInterval(this._incrementCount, 1000);
  } */

  render() {
    return (
      <View style={{ transform: [{ translate: [0, 0, -2] }], flex:1 }}>
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
              width: 100,
              height: 100,
              borderRadius: 50,
              shadowColor: "#d9534f",
              shadowOffset: { width: 30, height: 10 },
              shadowOpacity: 1,
              shadowRadius: 0,
              padding: 0,
              backgroundColor: item.color,
              borderColor: "transparent",
              borderWidth: 4,
              transform: [{ translate: [index * 100, index*50, 0] }],
            }}
          >
            <Text style={styles.red}>{item.name}</Text>
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
    width: 2000,
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

AppRegistry.registerComponent("lovetest", () => lovetest);

