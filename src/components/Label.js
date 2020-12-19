/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,TouchableOpacity, Text} from "react-native";

const Label = (props)=> {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles[props.textColor]}
                onClick={props.onClick}>{props.label}{props.counter} </Text>
        </TouchableOpacity>
    );
};

export default Label;

const styles = StyleSheet.create({
text:{
    marginLeft:10,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    textAlign:'center',
},
textColor:{
    color:'#713975',
    fontWeight: 'bold',
    fontSize: 30,
},
});
