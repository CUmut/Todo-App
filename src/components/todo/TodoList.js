import React from 'react';
import {View} from 'react-native';
import TodoListItem from './TodoListItem';
import styles from './TodoList.style';

const TodoList = ({todos, onRemove}) => {
  return (
    <View>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}></TodoListItem>
      ))}
    </View>
  );
};

export default TodoList;
