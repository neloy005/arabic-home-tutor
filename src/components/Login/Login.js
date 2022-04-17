import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const navigateToRegister = () => {
        navigate('/register');
    }
    return (
        <div className='login-container'>
            <h2>Login to your account</h2>
            <h3>Login to your personal account to start courses 😊</h3>
            <hr />
            <form>
                <input type="email" placeholder='Enter Your Email' /> <br />
                <input type="password" placeholder='Enter Your password' /> <br />
                <input className='submit-btn' type="submit" value='Login' />
            </form>
            <p>New in my website? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToRegister}>Please Register.</span></p>
        </div>
    );
};

export default Login;