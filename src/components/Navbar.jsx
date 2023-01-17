import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import Title from './Title';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="nav-bar">
                <nav>
                    {user && 
                        <div>
                            <span>{user.email}</span>
                            <  button onClick={handleClick}>Log out</button>
                        </div>
                    }
                    
                    {!user && 
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    }
                </nav>
                <Title />
            </div>
        </header>
    )
}

export default Navbar