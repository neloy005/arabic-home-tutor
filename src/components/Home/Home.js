import React from 'react';
import './Home.css'
import banner from '../../img/quran1.jpg'
import { Carousel } from 'react-bootstrap';

const Home = () => {
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
                <div className='verse-container'>
                    <hr className='horizontal-line' />
                    <h2>" تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ "</h2>
                    <hr />
                    <h3>Meaning: Blessed is the One in Whose Hands rests all authority. And He is Most Capable of everything. (67:1)</h3>
                    <hr className='horizontal-line' />
                </div>

            </div>
        </div>
    );
};

export default Home;