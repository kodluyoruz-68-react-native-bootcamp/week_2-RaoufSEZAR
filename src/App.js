/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-extra-semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View, SafeAreaView } from "react-native";
import {Label,AddTodo,TodoItem} from './components/index';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [counter, setCounter] = useState(0);
  const onPress = () => {
    setCounter(previousCount => previousCount + 1);};

  // const notes=[{id:Math.random().toString(),text:"somthing"}];
  const [todos, setTodos] = useState([]);
  const handlerLongClick = (key)=>{
      setTodos((previousTodos)=>{
        return previousTodos.filter(todo=>todo.key != key)
      });
    };

  const submitHandler =(text) => {
    setTodos((previousTodos) => {
      if (text =="") {
        console.log('empty');
      } else {
        return [
        { text:text,key:Math.random().toString()},
        ...previousTodos
      ]
      }
    })
  }
  // function addNoteToList(item) {
  //   setNoteList([...notes, item]);
  // }
  // const renderNotes = ({item}) => (
  //   <Label onClick={addNoteToList} />
  // );
  return (

    <SafeAreaView style={{flex: 1,backgroundColor: '#dcbbde'}}>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Label label="TODO" textColor="textColor"/>
          <Label counter={counter} textColor="textColor"/>
        </View>

      <View style={styles.list}>
        <FlatList testID="list" data={todos} keyExtractor={(item, index) => item.key}
        renderItem={({item})=>
        (<TodoItem item={item} handlerLongClick={handlerLongClick}/>)
        }/>
      </View>
        {/* <View style={styles.AddTo}>
        <Input placeholder="type something to do"/>

        <TouchableOpacity testID="button"
          style={styles.button}
          onPress={onPress}
        >
          <Label label="ADD TODO "
          onPress={onPress}/>
        </TouchableOpacity>
        </View> */}
        <View style={styles.AddTo}>
        <AddTodo submitHandler={submitHandler}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius:15,
    alignItems: "center",
    backgroundColor: "#dcbbde",
    padding: 10,
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10,
  },
  AddTo:{
  backgroundColor: "#713975",
  margin:5,
  padding: 15,
  borderRadius:15,
  },
  list:{
    flex: 7,
    padding: 10,
   },
});


export default App;
