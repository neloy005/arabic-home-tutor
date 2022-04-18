import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import google from '../../img/google.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');

    const navigate = useNavigate()

    let errorMsg;
    //////////////////////////////
    // Set location after login //
    //////////////////////////////
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigateToRegister = () => {
        navigate('/register');
    }
    //////////////////////////////
    // Firebase login email-pass//
    //////////////////////////////
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    //////////////////////////////
    //Firebase login google//// //
    //////////////////////////////
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


    //////////////////////////////
    // Firebase reset password //
    //////////////////////////////
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (error || error1) {
        errorMsg = <p style={{ 'color': 'red' }}>Error: {error?.message} {error1?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        }
        else {
            toast('Enter your email first');
        }

    }
    return (
        <div className='login-container'>
            <h2>Login to your account</h2>
            <h3>Login to your personal account to start courses 😊</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name='email' placeholder='Enter Your Email' required /> <br />
                <input type="password" name='password' placeholder='Enter Your password' required /> <br />
                {errorMsg}
                <input className='submit-btn' type="submit" value='Login' />
            </form>

            <p>Forget password? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={resetPassword}>Reset Password</span></p>
            <p>New in my website? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToRegister}>Please Register.</span></p>
            <p>Or</p>
            <div onClick={() => signInWithGoogle()} className='google-login-container'>
                <img style={{ 'width': '20px' }} src={google} alt="" />
                <span>Login with google</span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;