import './App.css'
import Header from './components/Header/Header'
import Cadastro from "./components/Cadastros/Cadastros";
import List from './components/List/List';

import { useState } from 'react'

function App() {
  const [registers, setRegisters] = useState([]);

  const newRegister = (newRegister) => {
    setRegisters([...registers, newRegister]);
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <Cadastro newRegister={newRegister} />
        <List registers={registers} />
      </div>
    </>

  );
}

export default App;
