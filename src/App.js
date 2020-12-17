/* eslint-disable prettier/prettier */
/* eslint-disable no-labels */
/* eslint-disable no-label-var */
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
import { StyleSheet,FlatList, Text, View, SafeAreaView } from "react-native";
import AddTodo from './components/addTodo';
import TodoItem from './components/todoItem';
import Label from './components/Label';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [counter, setCounter] = useState(0);
  const onPress = () => {
    setCounter(previousCount =>previousCount + 1);};

  // const notes=[{id:Math.random().toString(),text:"somthing"}];
  const [todos, setTodos] = useState([]);

  const handlerLongClick = (key)=>{
      setTodos((previousTodos)=>{

        return previousTodos.filter(todo=>todo.key != key)
      });
      setCounter(counter-1);
    };

  const addNoteToList =(text) => {
    if (text =="") {
        console.log('empty');
        return 0;
      }
    setTodos((previousTodos) => {
        return [
        { text:text,key:Math.random().toString(),checked:false},
        ...previousTodos
      ]
      }
    );
    setCounter(counter+1);
  }


  const toggleCheckedTodo = (key) => {
    setTodos(
      todos.map((todo) =>
        todo.key === key ? { ...todo, checked:!todo.checked } : todo,
      ),
    );
  };
  const onCheckButtonClickHandler = (key) => (e) => {
      toggleCheckedTodo(key);
  }
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#dcbbde'}}>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Label label="TODO" textColor="textColor"/>
          <Text textColor="textColor">{counter}</Text>
        </View>

      <View style={styles.list}>
        <FlatList testID="list" data={todos} keyExtractor={(item, index) => item.key}
        renderItem={({item})=>
        (<TodoItem item={item} handlerLongClick={handlerLongClick} onCheckButtonClickHandler={onCheckButtonClickHandler}/>)
        }/>
      </View>
        <View style={styles.AddTo}>
            <AddTodo counter={counter} addNoteToList={addNoteToList}/>
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
