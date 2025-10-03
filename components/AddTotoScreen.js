
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

function AddTodoScreen({ navigation: navigator }) {
  {

  }
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

const submit = async (value) => {
  const oldTodos = await AsyncStorage.getItem('todos');
  let newTodos = [];

  if (oldTodos) {
    newTodos = [...JSON.parse(oldTodos), value]; 
  } else {
    newTodos = [value]; 
  }

  await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
  setInputValue('');
  setTodos(newTodos); 
  navigator.goBack();
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Todo</Text>


      <TextInput style={styles.input} placeholder="Enter todo item"
        value={inputValue} onChangeText={setInputValue}

      />



      <TouchableOpacity style={styles.button}
        onPress={() => submit(inputValue)}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddTodoScreen;