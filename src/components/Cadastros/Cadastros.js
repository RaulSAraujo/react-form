import { useState } from 'react'
import './styles.css'

function Cadastro({ newTarefa }) {
    const [input, setInput] = useState('')
    

    const handleRegistro = (e) => {
        e.preventDefault();

        // Adiciona o novo registro à lista de tarefas
        newTarefa(input);

        // Limpa os campos do formulário
        setInput('');
    };


    return (
        <>
            <form onSubmit={handleRegistro}>
                <div class="form-group">
                    <label for="name">Nome da tarefa:</label>
                    <input type="text" name="name" value={input} onChange={(e) => setInput(e.target.value)} required />
                </div>
               
                <div class="form-group">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
            
        </>
    )
}

export default Cadastro;