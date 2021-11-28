import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useContext';

const PlaceBook = () => {
    const { register, handleSubmit, reset } = useForm();


    const { id } = useParams();
    const { user } = useAuth();

    // -------useRef declare for normal form-----
    // const nameRef = useRef();
    // const emailRef = useRef();
    // const packageNameRef = useRef();
    // const packageIdRef = useRef();
    // const addressRef = useRef();

    const [singlePackage, setSinglePackage] = useState({});

    // dynamic data load
    useEffect(() => {
        fetch(`https://frightening-alien-79885.herokuapp.com/trips/${id}`)
            .then(res => res.json())
            .then(data => {
                setSinglePackage(data);
                reset(data)
            });
    }, [reset, id])



    // -----------handler For normal form . it is also correct ------------
    // const handleBook = e => {
    //     e.preventDefault();
    //     const name = nameRef.current.value;
    //     const email = emailRef.current.value;
    //     const packageName = packageNameRef.current.value;
    //     const packageId = packageIdRef.current.value;
    //     const address = addressRef.current.value;

    //     const user = { name, email, packageName, packageId, address };

    //     // axios for send user information
    //     axios.post('https://frightening-alien-79885.herokuapp.com/booking', user)
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('added successfully');

    //             }
    //         })

    // }


    // react hook form
    const onSubmit = data => {
        // data send to db by axios

        delete data.img;
        delete data.description;
        delete data._id;

        console.log(data)
        // data send to db by axios
        axios.post('https://frightening-alien-79885.herokuapp.com/booking', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();

                }
            })

    }



    return (
        <div className='m-5  text-center'>
            <h2 className='mt-5 pt-5  text-danger'>Place Booking</h2>
            <div className='d-flex m-5 p-5'>
                <div className=''>
                    <h3 className='text-primary'>{singlePackage?.name}</h3>
                    <p>{singlePackage?.description}</p>

                    {/* react hook form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-75 m-3' value={user.displayName} {...register("user", { required: true, maxLength: 20 })} />
                        <br />
                        <input className='w-75 m-3' value={user.email} {...register("email")} placeholder="email" />
                        <br />
                        <input className='w-75 m-3' value={singlePackage.name}  {...register("name")} />
                        <br />

                        <input className='w-75 m-3' value={singlePackage._id}  {...register("id")} />
                        <br />
                        <input className='w-75 m-3'  {...register("address")} placeholder="address" />
                        <br />

                        <input className='btn btn-warning w-25 m-3' type="submit" value='Confirm' />
                    </form>


                    {/* ----------- 
                    normal form . it is also correct ------------*/}

                    {/* <form onSubmit={handleBook}>

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
                    </form> */}


                </div>
                <img className='ps-4' src={singlePackage?.img} alt="" />

            </div>



        </div>
    );
};

export default PlaceBook;