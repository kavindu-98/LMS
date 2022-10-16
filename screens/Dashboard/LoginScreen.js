import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LoginComponent, SignupComponent } from "../components";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";

const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080//api/users/login';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const payload = {
      email,
      password,
    };

    try {
      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#5680E9"
          translucent={true}
        />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            // duration="1500"
            source={require("../assets/images/LOGO.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <TextIconButton
              label="Login"
              customContainerStyle={{
                width: 130,
                height: 35,
                borderRadius: SIZES.radius_btn1,
                marginLeft: 15,
              }}
              customLabelStyle={{
                color: COLORS.white,
                alignItems: "center",
                marginLeft: -15,
                fontSize: 20,
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <TextIconButton
              label="Register"
              customContainerStyle={{
                width: 130,
                height: 35,
                borderRadius: SIZES.radius_btn1,
                marginLeft: 55,
                backgroundColor: COLORS.transparentWhite,
              }}
              customLabelStyle={{
                color: COLORS.grey,
                alignItems: "center",
                marginLeft: -15,
                fontSize: 20,
              }}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            />
          </View>
          <Animatable.View
            animation="fadeInLeft"
            style={{ marginTop: SIZES.padding3, margin: SIZES.padding2 }}
          >
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                autoFocus
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={styles.inputTitle}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputpass}
                  placeholder="Enter your password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />

                <PasswordIcon icon={icons.eye_slash} />
              </View>
            </View>

            <TextIconButton
              label="Login"
              customContainerStyle={{
                width: "100%",
                height: 55,
                borderRadius: SIZES.radius_btn2,
                marginTop: SIZES.padding,
              }}
              customLabelStyle={{
                color: COLORS.white,
                alignItems: "center",
                marginLeft: -15,
                ...FONTS.h2,
              }}
              onPress={register}
            />
            <Text style={styles.inputSubTitle}>Or</Text>

            <TextIconButton
              icon={icons.google}
              label="Login with Google"
              customContainerStyle={{
                width: "100%",
                height: 40,
                borderRadius: SIZES.radius_btn2,
                marginTop: SIZES.padding3,
              }}
              customLabelStyle={{
                color: COLORS.white,
                textAlign: "center",
                marginLeft: 20,
                ...FONTS.h4,
              }}
              customIconStyle={{
                justifyContent: "flex-start",
                marginLeft: -40,
                width: 30,
                height: 30,
              }}
              onPress={register}
            />

            <TextIconButton
              icon={icons.facebook}
              label="Login with facebook"
              customContainerStyle={{
                width: "100%",
                height: 40,
                borderRadius: SIZES.radius_btn2,
                marginTop: SIZES.padding3,
              }}
              customLabelStyle={{
                color: COLORS.white,
                textAlign: "center",
                marginLeft: 20,
                ...FONTS.h4,
              }}
              customIconStyle={{
                justifyContent: "flex-start",
                marginLeft: -30,
                width: 30,
                height: 30,
              }}
              onPress={register}
            />
            <Text style={styles.inputSubTitle}>Or continue as</Text>
            <TextIconButton
              icon={icons.account}
              label="Guest user"
              customContainerStyle={{
                width: "100%",
                height: 50,
                borderRadius: SIZES.radius_btn2,
                marginTop: SIZES.padding3,
                backgroundColor: COLORS.dark_grey,
              }}
              customLabelStyle={{
                color: COLORS.white,
                alignItems: "center",
                marginLeft: 20,
                ...FONTS.h4,
              }}
              customIconStyle={{
                justifyContent: "flex-start",
                marginLeft: -30,
                width: 30,
                height: 30,
              }}
              onPress={register}
            />
          </Animatable.View>

          {/* <Tab.Navigator>
          <Tab.Screen style={styles.tab}  name="Login" component={LoginComponent} />
          <Tab.Screen name="Signup" component={SignupComponent} />
          </Tab.Navigator> */}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  tab: {
    backgroundColor: COLORS.primary,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    marginLeft: 10,
    flexDirection: "row",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputTitle: {
    ...FONTS.h3,
    fontWeight: "bold",
    marginTop: SIZES.padding2,
  },
  inputSubTitle: {
    ...FONTS.h4,
    fontWeight: "bold",
    marginTop: SIZES.padding3,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2,
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
  },
  inputpass: {
    flex: 1,
    width: "80%",
    height: 50,
    padding: SIZES.padding2,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
