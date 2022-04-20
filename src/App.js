import './App.css';
import ItemCreator from './Components/ItemCreator';
import List from './Components/List';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ItemCreator />
      <List />
    </RecoilRoot>
  );
}

export default App;
