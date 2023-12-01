import React, { useReducer, useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MeasurementItem from "../components/measurementItem";
import { getMeasurement } from "../apis/co2";

const measurements = [
  { id: "1", type: "CO2", icon: "md-cloud-outline", data: "" },
  { id: "2", type: "Humidity", icon: "md-water-outline", data: "" },
  { id: "3", type: "Temperature", icon: "md-thermometer-outline", data: "" },
];

const renderItem = ({ item }) => (
  <View style={styles.itemWrapperView}>
    <MeasurementItem type={item.type} icon={item.icon} />
  </View>
);

export default HomeScreen = () => {
  return (
    <View style={styles.screenView}>
      <Text style={styles.headerText}> Readings </Text>
      <FlatList
        data={measurements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  itemWrapperView: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ff7900",
    paddingBottom: 10,
  },

  co2Text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  editIcon: {
    paddingTop: 10,
  },

  signOutButton: {
    width: "50%",
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  signOutText: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
