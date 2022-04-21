import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import listState from './Atoms';

const ItemCreator = () => {
  const [todoList, setTodoList] = useRecoilState(listState);
  const [input, setInput] = useState('');

  const change = (event) => {
    setInput(event.target.value);
  };

  const submit = () => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        item: input,
        completed: false,
      },
    ]);
    setInput('');
    console.log('ping', todoList);
  };

  return (
    <div>
      <input type="text" value={input} onChange={change} />
      <input type="submit" value="submit" onClick={submit} />
    </div>
  );
};

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export default ItemCreator;
