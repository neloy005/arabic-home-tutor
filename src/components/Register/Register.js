import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className='login-container'>
            <h2>Register your account</h2>
            <hr />
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Your Name' /> <br />
                <input type="email" name='email' placeholder='Enter Your Email' /> <br />
                <input type="password" name='password' placeholder='Enter Your password' /> <br />
                <input className='submit-btn' type="submit" value='Register' />
            </form>
            <p>New in my website? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToLogin}>Please Login.</span></p>
        </div>
    );
};

export default Register;