import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import listState from './Atoms';
import axios from 'axios';

const ItemCreator = () => {
  const defaultForm = { name: '', description: '' };
  const [todoList, setTodoList] = useRecoilState(listState);
  const [form, setForm] = useState(defaultForm);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = () => {
    axios.post('', form).then().catch();
    setForm(defaultForm);
    console.log('ping', todoList);
  };
  // ^^^^^^Make this work^^^^^^

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <input type="submit" value="submit" onClick={submit} />
    </div>
  );
};

export default ItemCreator;
