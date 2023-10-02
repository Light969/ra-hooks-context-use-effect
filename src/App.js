import './App.css';
import { useState } from 'react';
import List from "./react-component/List/List";
import Details from "./react-component/Details/Details";

function App() {
  const [info, setInfo] = useState();
  const selectUser = (user) => {
    return () => {
      setInfo(user);
    }
  }

  return (
    <div className="User">
      <List selectUser={selectUser} />
      <Details info={info} />
    </div>
  );
}

export default App;
