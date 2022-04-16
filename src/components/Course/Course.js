import React from 'react';

const Course = (props) => {
    const { name, picture, price, stars, duration, deatils } = props.course;
    console.log(props.course);
    return (
        <div>
            <h2>My course</h2>
            <img src={picture} alt="" />
        </div>
    );
};

export default Course;