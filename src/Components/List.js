import React from 'react';
import { useRecoilState } from 'recoil';
import listState from './Atoms';

const List = () => {
  const [todoList, setTodoList] = useRecoilState(listState);

  const replaceItem = (arr, index, newItem) => {
    return [...arr.splice(0, index), newItem, ...arr.splice(index + 1)];
  };

  const removeItem = (arr, index) => {
    return [...arr.splice(0, index), ...arr.splice(index + 1)];
  };

  return (
    <>
      {todoList.length < 1 ? (
        <p>Please Add an Item to Your Todo List</p>
      ) : (
        todoList.map((item, key) => {
          return (
            <div>
              {item.item}
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => console.log('click')}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default List;
