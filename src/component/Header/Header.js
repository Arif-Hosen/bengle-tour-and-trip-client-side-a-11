import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useContext';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div >
            <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/home"><i className="fas fa-umbrella-beach me-3 ms-4"></i> Bengle Tour & Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
                            <Nav.Link as={NavLink} to="/mybooking">My Booking</Nav.Link>
                            <Nav.Link as={NavLink} to="/allbooking">Manage All Booking</Nav.Link>
                            <Nav.Link as={NavLink} to="/addpackage">Add Package</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>


                            {/* if have email, display  loguout and name , if not display login nav*/}
                            {user.email ?
                                <span className='ms-4'>
                                    <small className='text-light'>{user.displayName}</small>
                                    <button style={{ color: 'blue', border: ' 1px solid blue', borderRadius: ' 5px', marginLeft: '5px' }} onClick={logOut}>Logout</button>
                                </span>
                                : <Nav.Link style={{ color: 'white' }} as={NavLink} to="/login" >Log in</Nav.Link>

                            }


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;