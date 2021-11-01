import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5 ">

            {/* This is about page ,react bootstrap uses */}
            <Row lg={2} md={1} sm={1} className="g-4 mt-5 ">

                <Col className="mt-5 ">
                    <div className="p-5 ">
                        <h2 >Let us show you
                            the world</h2>
                        <p>Our team of travel insiders is obsessed with finding the best things to do everywhere: we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of
                            traveler. And we are proud to say that after 17 experience-packed years, we are the world leader.</p>
                    </div>
                </Col>
                <Col className="mt-5">

                    <img className="w-75" src="https://image.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg" alt="" />

                </Col>
                <Col>
                    <img src="https://image.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg" alt="" />
                </Col>
                <Col className='d-flex  mt-5'>
                    <div className=' m-5'>
                        <h2>20+ Years of Experience</h2>
                        <p>We are very proud to say that we can give you the best advice for your trip.</p>
                    </div>
                    <div className=' m-5'>
                        <h2>Reasonable Price</h2>
                        <p>We offer one of the most reasonable price throughout the market.</p>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default About;