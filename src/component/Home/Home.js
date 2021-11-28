import React from 'react';
import { Carousel } from 'react-bootstrap';
import Faq from '../FAQ/Faq';
import Packages from '../Packages/Packages';
import With from '../WithUs/With';


const Home = () => {
    return (
        <div className='container-fluid'>
            {/* carouser */}
            <Carousel >
                <Carousel.Item interval={1000}>
                    <div style={{ height: '700px' }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className='text-light fs-5'>
                        <h3>20+ Years of Experience</h3>
                        <p>We are very proud to say that we can give you the best advice for your trip.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div style={{ height: '700px' }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://image.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption className='text-light fs-5'>
                        <h3>Professional Local Tour Guide</h3>
                        <p>You will be full of information with our exceptional local tour guide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ height: '700px' }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://image.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3653.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className='text-light fs-5'>
                        <h3 >Reasonable Price</h3>
                        <p>We offer one of the most reasonable price throughout the market.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Packages></Packages>
            <With></With>
            <Faq></Faq>

        </div>
    );
};

export default Home;