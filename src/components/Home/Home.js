import React from 'react';
import './Home.css'
import banner from '../../img/quran1.jpg'
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h2>Arabic home tutor</h2>
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
    );
};

export default Home;