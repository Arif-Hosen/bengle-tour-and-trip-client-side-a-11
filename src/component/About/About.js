import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2>this is about</h2>
            <h2>this is about</h2>
            <h2>this is about</h2>

            <Row xs={1} md={2} className="g-4">

                <Col>
                    <div>
                        <h2>this text</h2>
                        <h2>this text</h2>
                        <h2>this text</h2>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>this left</h2>
                        <h2>this left</h2>
                        <h2>this left</h2>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default About;