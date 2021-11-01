
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useContext';



const PrivateRoute = ({ children, ...rest }) => {

    // destucture
    const { user, isLoading } = useAuth();
    // spinner set
    if (isLoading) {
        return <p style={{ marginBottom: '200px' }} className='text-center'><Spinner animation="border" variant="primary" /></p>
    }


    return (

        // private route 
        <Route
            {...rest}
            // conditionally render
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}>

                </Redirect>
            }>
        </Route>


    );
};

export default PrivateRoute;