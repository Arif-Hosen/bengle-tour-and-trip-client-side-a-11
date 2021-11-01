import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <h3 className='text-center m-5 text-danger'>Frequently Asked Questions</h3>
            <div className='d-flex mt-5 mb-5 pt-5 pb-5'>
                <Accordion className='w-50 m-5 '>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='text-info'>What about Cox's Bazar? </Accordion.Header>
                        <Accordion.Body className='text-danger'>
                            Coxs Bazar Beach, located at Coxs Bazar, Bangladesh, is the longest natural sea beach in the world running 150 kilometres
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What about India?</Accordion.Header>
                        <Accordion.Body>
                            India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What about Australia? </Accordion.Header>
                        <Accordion.Body>
                            Travel is the perfect way to meet new friends and try something new. Join with us and explore Australia.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What about Nepal? </Accordion.Header>
                        <Accordion.Body>
                            Nepal is a kingdom of Himalayas, artistic monuments and a unique harmony of diversified cultures and traditions. The glorious country is famous all over the world for many of its wonders.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Carousel className='w-50'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/asian-young-happy-family-enjoy-vacation-beach-evening-dad-mom-kid-relax-running-together-near-sea-while-silhouette-sunset-lifestyle-travel-holiday-vacation-summer-concept_7861-2447.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://as2.ftcdn.net/v2/jpg/03/19/14/33/500_F_319143394_k6oefdgNLz6BMt1LB6kc581L9zPX0kXa.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-68.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Faq;