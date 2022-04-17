import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const { name, picture, price, stars, duration, deatils } = props.course;
    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div className='single-course'>
            <h2>{name}</h2>
            <img src={picture} alt="" />
            <button onClick={goToCheckOut}>Start from today</button>
        </div>
    );
};

export default Course;