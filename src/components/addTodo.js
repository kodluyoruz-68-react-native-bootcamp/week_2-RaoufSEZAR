/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React,{useState} from "react";
import {View, Button, TextInput, StyleSheet} from "react-native";

function AddTodo({addNoteToList}) {
    const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    };
  return (
    <View>
      <TextInput
        style={styles.InputContainer} 
        placeholder='Add something to do' 
        onChangeText={changeHandler}
      />    
      <Button style={styles.textColor} onPress={()=>addNoteToList(text)} title="ADD TODO"/>
    </View>
  );
}

export {AddTodo};

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#eceff1",
    margin: 5,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 15,
  },
  textColor:{
      backgroundColor: '#713975',
    color:'#713975',
    fontWeight: 'bold',
    fontSize: 30,
},
});


