import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';

const Register = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate()
    //////////////////////////////
    // Firebase create user //
    //////////////////////////////
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //////////////////////////////
    // Firebase update profile //
    //////////////////////////////
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || updating) {
        return <p className='loading-style'>Loading...</p>
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 6) {
            setErrorMsg('password must be 6 character or more');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='login-container'>
            <h2>Register your account</h2>
            <hr />
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Your Name' required /> <br />
                <input type="email" name='email' placeholder='Enter Your Email' required /> <br />
                <input type="password" name='password' placeholder='Enter Your password' required /> <br />
                <p style={{ 'color': 'red' }}>{errorMsg} </p>
                <input className='submit-btn' type="submit" value='Register' />
            </form>
            <p>Already registered? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToLogin}>Please Login.</span></p>
        </div>
    );
};

export default Register;