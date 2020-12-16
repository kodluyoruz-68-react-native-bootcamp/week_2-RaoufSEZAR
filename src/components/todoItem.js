/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View, SafeAreaView } from "react-native";

function TodoItem({item,handlerLongClick}) {

    return(
        <TouchableOpacity onLongPress={()=>handlerLongClick(item.key)}>
        {/* onPress={handlerClick} */}

            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export {TodoItem};

const styles=StyleSheet.create({
    text:{
        marginTop: 16,
        borderWidth:1,
        backgroundColor: "#713975",
        borderStyle:'dashed',
        margin:5,
        padding: 15,
        borderRadius:15,
        textAlign:'center',
        color:"white",
        fontWeight: 'bold',
    },
});