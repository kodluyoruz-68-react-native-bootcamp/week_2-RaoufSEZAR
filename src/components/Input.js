/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

function Input(props) {
  return (
    <View style={styles.InputContainer}>
      <TextInput placeholder={props.placeholder} AddTo={props.AddTo} />
    </View>
  );
}

export {Input};

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#eceff1",
    margin: 5,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 15,
  },
});


