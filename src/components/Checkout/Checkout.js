import React from 'react';

const Checkout = () => {
    return (
        ///////////////////////
        // Checkout form 
        //////////////////////
        <div className='login-container'>
            <h2>Checkout</h2>
            <form>
                <input type="text" placeholder='Enter Your Name' required /> <br />
                <input type="email" placeholder='Enter Your Email' required /> <br />
                <input type="text" placeholder='Mobile number' required /> <br />
                <input type="text" placeholder='Education' required /> <br />
                <input type="text" placeholder='Age' required /> <br />
                <input className='submit-btn' type="submit" value='Enroll' />
            </form>
        </div>
    );
};

export default Checkout;