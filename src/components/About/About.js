import React from 'react';
import arif from '../../img/neloy.jpeg'

const About = () => {
    return (
        <div className='page-height'>
            <h2>About me!</h2>
            <div className='my-msg-container'>
                <div>
                    {/* ------------------------ */}
                    {/* About me and my vision */}
                    {/* ------------------------ */}
                    <h2>What is my purpose?</h2>

                    <p>I want to invest all my time time end effort in the rest of the couse to become as efficient as possible in web development.</p>
                    <p>I'm determined enough to start a job as a junior developer after I complete this course.</p>
                    <p>I'm ready to learn anything that is takest to reach my target.</p>
                    <p>I'm confident that the way I've worked for last four month, I'm capable enough to do the rest.</p>
                </div>
                <img src={arif} alt="" />
            </div>
        </div>
    );
};

export default About;