import React from 'react';
import islam from '../../img/islam1.jpg'
import './MyMsg.css'

const MyMsg = () => {
    return (
        <div className='my-msg-container'>
            <div>
                <h2>How my course works?</h2>
                <p>The main objective of my course is to get you back to the path of islam. And make you you what you have been told to do by Allah.</p>
                <p>After you purchase the course. You will have the full access to all the content available in the course for lifetime. But My step by step procedure of teaching will get you stuck to the course till the end in sah allah.</p>
                <p>Currently I'm offering 4 different courses with one core midset. I hope to add more islamic courses in future in sah allah.</p>

            </div>
            <img src={islam} alt="" />
        </div>
    );
};

export default MyMsg;