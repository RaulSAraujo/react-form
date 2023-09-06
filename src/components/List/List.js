import './styles.css'

function List({ tarefas }) {
    return (
        <>
            <h2 className="list-header">Lista de tarefas</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li className="tarefas" key={index}>
                        {tarefa}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;