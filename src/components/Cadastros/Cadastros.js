import { useState } from 'react'
import './styles.css'

function Cadastro({ newRegister }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // Cria um novo registro com os dados atuais do formulário
        const novoRegistro = { name, email, age };

        // Adiciona o novo registro à lista de registros
        newRegister(novoRegistro);

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setAge('');
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Nome:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="age">Idade:</label>
                    <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div class="form-group">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
            
        </>
    )
}

export default Cadastro;