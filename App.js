import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Todo from './src/components/todo/Todo';
import TodoList from './src/components/todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  useEffect(() => {
    setTasksRemaining(todos.length);
  });

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Yapılacaklar{' '}
            {'                                                     '}
            <Text style={styles.count}>{tasksRemaining}</Text>
          </Text>
        </View>

        <TodoList todos={todos} onRemove={onRemove}></TodoList>
        <Todo onAddTodo={addTodo} />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  text: {
    color: '#ff7f50',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  count: {
    color: '#ff7f50',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
