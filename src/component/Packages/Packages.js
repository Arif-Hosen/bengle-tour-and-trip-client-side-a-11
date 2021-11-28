import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css';


const Packages = () => {
    const [load, setLoad] = useState(true);

    const [trips, setTrips] = useState([]);
    // load packages data from trips collection of db
    useEffect(() => {

        fetch('https://frightening-alien-79885.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => {
                setTrips(data)
                setLoad(false)

            });
    }, [])


    return (
        <div >
            <h2 className=" mt-5 pt-5  text-primary text-center">Packages</h2>

            {load ? <div className='text-center'>
                <Spinner animation="border" variant="dark" />
            </div> :
                <Row lg={2} md={1} sm={1} className="g-5 m-5 ">

                    {

                        /*   loop through to trips state and indivitual trip*/
                        trips.map(trip => <Col key={trip._id}>
                            <Card className='package-card'>
                                <Card.Img variant="top" src={trip.img} />
                                <Card.Body>
                                    <Card.Title className='trip-name'>{trip.name}</Card.Title>
                                    <Card.Text>
                                        {trip.description}
                                    </Card.Text>
                                    <Card.Text className='trip-name'>Price: $
                                        {trip.cost}
                                    </Card.Text>
                                    <div className='mb-3'>
                                        <span>Rating:</span>
                                        <i className="fas fa-star ms-3 rate"></i>
                                        <i className="fas fa-star rate"></i>
                                        <i className="fas fa-star rate"></i>
                                        <i className="fas fa-star rate"></i>

                                        <i className="fas fa-star-half-alt rate"></i>
                                    </div>
                                    <Link to={`/trips/${trip._id}`}><Button>Book Now</Button></Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }

                </Row>
            }
        </div >
    );
};



export default Packages;