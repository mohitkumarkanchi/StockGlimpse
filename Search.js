import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  Picker,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Search({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#242424" }}>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 25,
          color: "#FFFFFF",
          paddingTop: 70,
          left: 20,
        }}
      >
        List Of Companies
      </Text>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          marginTop: 10,
          backgroundColor: "#2E2C2C",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "SENSEX",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                Sensex
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#3A3939",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "NIFTY",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                Nifty
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#2E2C2C",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "RELIANCE",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                Reliance
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#3A3939",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "ASHOKALEY",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                Ashok Ley
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#2E2C2C",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "Cipla",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                Cipla
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#3A3939",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Console", {
              itemId: 1,
              Company: "TATA STEELS",
            });
          }}
        >
          <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 25 }}
              >
                TATA Steels
              </Text>
            </View>

            <View style={{ width: "20%", justifyContent: "center" }}>
              <Image
                source={require("./assets/right.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
