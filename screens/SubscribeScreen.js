import * as React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, View, Pressable} from "react-native";

import {validateEmail} from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(false);


  const isEmailValid = () => {
      console.log(email)
      const v = validateEmail(email);
      console.log("valido: ", v)
    return v }
  
   const setEmailText = (email) => {
    setEmail(email);
    setDisabled(validateEmail(email) && true)
   }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={e => setEmailText(e)}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
      <Pressable style={[styles.button,{ backgroundColor: isDisabled ? 'green' : 'gray'} ]}
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isDisabled}
      >
        <Text style={styles.buttonText}> Subscribe </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    margin: 0,
    border: 0,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: 'green',
    borderColor: 'green',
    borderRadius: 10,

  },

});

export default SubscribeScreen;
