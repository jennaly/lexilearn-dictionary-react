import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label>Email:</label>
                <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <label>Password:</label>
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

                <button disabled={isLoading}>Login</button>

                { error && 
                    <div>{error}</div>
                }
            </form>
        </div>
    )
}

export default Login