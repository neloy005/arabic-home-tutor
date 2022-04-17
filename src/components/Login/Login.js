import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    let errorMsg;
    const navigateToRegister = () => {
        navigate('/register');
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }
    if (error) {
        errorMsg = <p style={{ 'color': 'red' }}>Error: {error?.message} </p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-container'>
            <h2>Login to your account</h2>
            <h3>Login to your personal account to start courses 😊</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Enter Your Email' required /> <br />
                <input type="password" name='password' placeholder='Enter Your password' required /> <br />
                {errorMsg}
                <input className='submit-btn' type="submit" value='Login' />
            </form>
            <p>New in my website? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToRegister}>Please Register.</span></p>
        </div>
    );
};

export default Login;