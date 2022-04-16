import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../img/quran1.jpg'
import { Carousel } from 'react-bootstrap';
import Verse from '../Verse/Verse';
import Course from '../Course/Course';

const Home = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h2>Arabic home tutor</h2>
            <div className='banner-container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Learn Al Quran</h2>
                            <p>And open up your way to jannah.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <h1>Read a single verse everyday</h1>
                <Verse></Verse>
            </div>
            <h2>Courses I offer:</h2>
            <div>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

        </div>
    );
};

export default Home;