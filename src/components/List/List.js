import './styles.css'

function List({ registers }) {
    return (
        <>
            <h2 className="list-header">Lista de cadastros</h2>
            <ul>
                {registers.map((register, index) => (
                    <li className="registro" key={index}>
                        <strong>Nome:</strong> {register.name},{' '}
                        <strong>Email:</strong> {register.email},{' '}
                        <strong>Idade:</strong> {register.age}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;