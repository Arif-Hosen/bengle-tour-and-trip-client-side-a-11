import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useContext';

const PlaceBook = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // useRef declare
    const nameRef = useRef();
    const emailRef = useRef();
    const packageNameRef = useRef();
    const packageIdRef = useRef();
    const addressRef = useRef();

    const [singlePackage, setSinglePackage] = useState({});

    // dynamic data load
    useEffect(() => {
        fetch(`https://frightening-alien-79885.herokuapp.com/trips/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])

    // form 
    const handleBook = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const packageName = packageNameRef.current.value;
        const packageId = packageIdRef.current.value;
        const address = addressRef.current.value;

        const user = { name, email, packageName, packageId, address };

        // axios for send user information
        axios.post('https://frightening-alien-79885.herokuapp.com/booking', user)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');

                }
            })

    }



    return (
        <div className='m-5  text-center'>
            <div className='d-flex m-5 p-5'>
                <div className=''>
                    <h3 className='text-primary'>{singlePackage?.name}</h3>
                    <p>{singlePackage?.description}</p>

                    <form onSubmit={handleBook}>

                        <input ref={nameRef} className='w-75 ' type="text" value={user.displayName} />
                        <br />
                        <input ref={emailRef} className='w-75 m-3' value={user.email} type='email' />
                        <br />
                        <input ref={packageNameRef} className='w-75 m-3' value={singlePackage.name} />
                        <br />
                        <input ref={packageIdRef} className='w-75 m-3' value={singlePackage._id} />
                        <br />
                        <input ref={addressRef} className='w-75 m-3' placeholder="address" />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Confirm Booking" />
                    </form>


                </div>
                <img className='ps-4' src={singlePackage?.img} alt="" />

            </div>



        </div>
    );
};

export default PlaceBook;