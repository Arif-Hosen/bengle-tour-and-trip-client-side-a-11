import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useContext';

const PlaceBook = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const packageNameRef = useRef();
    const packageIdRef = useRef();
    const addressRef = useRef();

    // const [placeBooking, setPlaceBooking] = useState([]);
    const [singlePackage, setSinglePackage] = useState({});



    useEffect(() => {
        fetch(`https://frightening-alien-79885.herokuapp.com/trips/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])


    const handleBook = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const packageName = packageNameRef.current.value;
        const packageId = packageIdRef.current.value;
        const address = addressRef.current.value;

        const user = { name, email, packageName, packageId, address };


        axios.post('https://frightening-alien-79885.herokuapp.com/booking', user)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }



    // useEffect(() => {
    //     const singleBookingDescription = placeBooking.find(singleBook => singleBook._id == id)
    //     setSinglePackage(singleBookingDescription);
    // }, [placeBooking])
    return (
        <div className='m-5  text-center'>
            <div className='d-flex m-5 p-5'>
                <div className=''>
                    <h3>{singlePackage?.name}</h3>
                    <p>{singlePackage?.description}</p>

                    <form onSubmit={handleBook}>

                        <input ref={nameRef} className='w-50 ' type="text" value={user.displayName} />
                        <br />
                        <input ref={emailRef} className='w-50 m-3' value={user.email} type='email' />
                        <br />
                        <input ref={packageNameRef} className='w-50 m-3' value={singlePackage.name} />
                        <br />
                        <input ref={packageIdRef} className='w-50 m-3' value={singlePackage._id} />
                        <br />
                        <input ref={addressRef} className='w-50 m-3' placeholder="address" />
                        <br />
                        <input type="submit" value="Place Booking" />
                    </form>


                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-50 m-3' value={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <br />
                        <input className='w-50 m-3' value={user.email} {...register("email")} placeholder="" />
                        <br />
                        <input className='w-50 m-3' value={singlePackage.name} {...register("description", { required: true })} />
                        <br />
                        <input className='w-50 m-3' value={singlePackage._id} {...register("number", { required: true })} />
                        <br />
                        <input className='w-50 m-3'  {...register("address")} placeholder="address" />
                        <br />
                        <input type="submit" />
                    </form> */}


                </div>
                <img src={singlePackage?.img} alt="" />

            </div>



        </div>
    );
};

export default PlaceBook;