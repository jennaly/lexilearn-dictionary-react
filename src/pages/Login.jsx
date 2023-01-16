import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        e.preventDefault();

        console.log(email, password);
    }
    return (
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

            <button>Login</button>
        </form>
    )
}

export default Login