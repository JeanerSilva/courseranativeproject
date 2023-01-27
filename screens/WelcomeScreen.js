import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Button from "../components/Button";



const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable style={styles.button}
        onPress={() => {
          navigation.navigate("Subscribe");
          
        }}
      >
        <Text style={styles.buttonText}> Newsletter </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    margin: 0,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default WelcomeScreen;
