import { atom } from 'recoil';

const listState = atom({
  key: 'TodoList',
  default: [],
});

export default listState;
