import './styles.css'

function Header({ user }) {

    return (
        <header className='Header'>
            <h1>{user}, sua lista de tarefas</h1>
        </header>
    )
}

export default Header;