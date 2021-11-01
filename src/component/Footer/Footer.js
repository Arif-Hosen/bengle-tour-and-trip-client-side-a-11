import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // footer section
        <div className='bg-dark mt-5 pt-5'>

            <Row lg={3} md={3} sm={1} className='me-5 ms-5 p-5 text-light'>
                <Col>

                    <h5>Bengle Tour & Trip</h5>
                    <Link to="/home"> <p>Why us</p></Link>
                    <Link to="/home"> <p>Why Touring</p></Link>
                    <Link to="/home"> <p>Share your review</p></Link>
                    <Link to="/home"> <p>Travel Insurance</p></Link>
                    <Link to="/home"> <p>Referral program</p></Link>
                </Col>
                <Col>

                    <h5>About</h5>
                    <Link to="/home"> <p>Customer Reviews</p></Link>
                    <Link to='/home'><p>Why Touring</p></Link>
                    <Link to='/home'><p>Terms & Conditions</p></Link>
                    <Link to='/home'><p>Contact</p></Link>
                    <Link to='/home'><p>Help</p></Link>
                </Col>

                <Col>

                    <h5>For Operators</h5>
                    <Link to="/home"> <p>List your tours</p></Link>
                    <Link to='/login'><p>Log In</p></Link>
                    <Link to='/home'><p>Awards</p></Link>
                    <Link to='/home'><p>Travellers’ Choice</p></Link>
                    <Link to='/home'><p>Authors</p></Link>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;