import React from 'react';
import { useRecoilState } from 'recoil';
import listState from './Atoms';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(listState);
  const index = todoList.findIndex((thing) => thing === item);

  const replaceItem = (arr, index, newItem) => {
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  const removeItem = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const toggleCompletion = () => {
    const newList = replaceItem(todoList, index, {
      ...item,
      completed: !item.completed,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItem(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      {item.item}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompletion}
      />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
