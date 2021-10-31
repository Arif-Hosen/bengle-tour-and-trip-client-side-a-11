import React from 'react';
import { Carousel } from 'react-bootstrap';
import Faq from '../FAQ/Faq';
import Packages from '../Packages/Packages';
import With from '../WithUs/With';


const Home = () => {
    return (
        <div>

            <Carousel >
                <Carousel.Item interval={1000}>
                    <div style={{ height: '700px' }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '700px' }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://image.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3653.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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