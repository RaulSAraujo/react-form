import './App.css'
import Header from './components/Header/Header'
import Cadastro from "./components/Cadastros/Cadastros";
import List from './components/List/List';

import { useState, useEffect } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [user, setUser] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const newTarefa = (newTarefa) => {
    setTarefas([...tarefas, newTarefa]);
  };

  const tarefasStorage = localStorage.getItem('@tarefa')
  const userStorage = localStorage.getItem('@user')

  useEffect(() => {
    if (!userStorage) {
      const input = window.prompt('Qual o seu nome ?')
      setUser(input)

      localStorage.setItem('@user', input)
    } else {
      setUser(userStorage)
    }

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  useEffect(() => {
    document.documentElement.style.setProperty('--selected-color', selectedOption);
  }, [selectedOption]);

  return (
    <>
      <Header user={user} />
      <div className="form-container">
        <Cadastro newTarefa={newTarefa} />
        <List tarefas={tarefas} />

        <div>
          <h3>Select a Color:</h3>
          <label>
            <input
              type="radio"
              value="red"
              checked={selectedOption === 'red'}
              onChange={handleOptionChange}
            />
            Red
          </label>
          <label>
            <input
              type="radio"
              value="blue"
              checked={selectedOption === 'blue'}
              onChange={handleOptionChange}
            />
            Blue
          </label>
          <label>
            <input
              type="radio"
              value="green"
              checked={selectedOption === 'green'}
              onChange={handleOptionChange}
            />
            Green
          </label>
        </div>
      </div>
    </>

  );
}

export default App;
