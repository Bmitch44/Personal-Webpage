import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { login } from '../../../services/adminService';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['sessionId']);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await login(email, password);
        console.log(response);
        if (response) {
            setCookie('sessionId', response, { path: '/', secure: true});
            console.log({cookies})
            navigate('/admin-dashboard')
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Admin Login</h1>
                <form>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;