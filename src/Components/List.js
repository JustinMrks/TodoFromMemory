import React from 'react';
import { useRecoilState } from 'recoil';
import listState from './Atoms';

const List = () => {
  const [todoList, setTodoList] = useRecoilState(listState);

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
                name="completion"
                checked={item.completed}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default List;
