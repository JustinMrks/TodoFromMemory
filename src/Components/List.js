import React from 'react';
import { useRecoilValue } from 'recoil';
import listState from './Atoms';
import TodoItem from './TodoItem';

const List = () => {
  const todoList = useRecoilValue(listState);

  return (
    <>
      {todoList.length < 1 ? (
        <p>Please Add an Item to Your Todo List</p>
      ) : (
        todoList.map((item, key) => {
          return <TodoItem item={item} key={key} />;
        })
      )}
    </>
  );
};

export default List;
