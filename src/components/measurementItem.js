import React, { useReducer, useState } from "react";
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

export default MeasurementItem = (props) => {
  return (
    <>
      <View style={styles.measurementContainer} alignItems="center">
        <Text style={styles.measurementText}> {props.type} </Text>
        <Ionicons name={props.icon} size={34} color="#ff7900" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed");
            }}
            style={styles.measureButton}
          >
            <Text style={styles.signOutText}> Measure </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ff7900",
    paddingBottom: 10,
  },

  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#ff7900",
  },

  measurementContainer: {
    flexDirection: "column",
  },

  measurementText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  editIcon: {
    paddingTop: 10,
  },

  locationContainer: {
    flexDirection: "row",
    paddingBottom: 20,
  },

  locationText: {
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 4,
  },

  preferencesContainer: {
    height: "35%",
    width: 200,
    alignItems: "center",
  },

  moreText: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  measureButton: {
    width: "50%",
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    paddingTop: 15,
  },
});