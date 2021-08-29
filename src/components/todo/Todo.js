import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Todo.style';

const Todo = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <View>
          <Text style={styles.count}>{}</Text>
        </View>
        <View style={styles.text_inner_container}>
          <TextInput
            placeholder="Yapılacak..."
            value={newTodoItem}
            style={styles.text_input}
            onChangeText={todoInputHandler}
            autoCorrect={false}
          />

          <View style={styles.seperator}></View>

          <View style={styles.button}>
            <TouchableOpacity>
              <Button
                color="#f8f8ff"
                title="Kaydet"
                onPress={addTodoHandler}></Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Todo;
