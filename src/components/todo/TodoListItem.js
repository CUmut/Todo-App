import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoListItem.style';

const TodoListItem = ({textValue, id, onRemove}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRemove(id)}>
        <Text style={styles.list_container}>{textValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoListItem;
