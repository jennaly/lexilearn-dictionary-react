import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Title from '../components/Title';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    }
    return (
        <div>
            <Title />

            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

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

                <button disabled={isLoading}>Sign up</button>

                { error && 
                    <div>{error}</div>
                }
            </form>
        </div>
    )
}

export default Signup