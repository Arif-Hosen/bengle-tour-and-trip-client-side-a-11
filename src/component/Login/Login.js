import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useContext';



const Login = () => {
    const { signinWithGoogle, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory();


    // goole sign in button handler
    const googleHandler = (e) => {
        e.preventDefault();
        signinWithGoogle()
            .then((res) => {
                setUser(res.user)
                // console.log(res)
                history.push(location.state?.from)
            })
    }

    return (
        <div className='mt-5'>

            <div className='text-center'>
                <h3 className='pt-5 m-5 text-center text-primary'>SignIn with Google</h3>
                <button onClick={googleHandler} type="submit" className="btn btn-warning w-25 mx-auto">Google Sign In</button>
                <p className='m-5'>--------------------------------</p>
            </div>



            <form className='w-25 mx-auto'>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>



        </div>
    );
};

export default Login;