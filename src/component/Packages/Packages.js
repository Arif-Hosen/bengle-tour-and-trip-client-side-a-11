import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Packages = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('https://frightening-alien-79885.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => setTrips(data));
    }, [])
    return (
        <div>
            <h2 className=" mt-5 pt-5 text-center text-primary">Packages</h2>

            <Row lg={2} md={1} sm={1} className="g-5 m-5">

                {
                    trips.map(trip => <Col key={trip._id}>
                        <Card>
                            <Card.Img variant="top" src={trip.img} />
                            <Card.Body>
                                <Card.Title>{trip.name}</Card.Title>
                                <Card.Text>
                                    {trip.description}
                                </Card.Text>
                                <Card.Text>Price: $
                                    {trip.cost}
                                </Card.Text>
                                <Link to={`/trips/${trip._id}`}><Button>Book Now</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }

            </Row>
        </div >
    );
};

// `/placebook/${trip._id}`

export default Packages;