import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useContext';

const PlaceBook = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    // const [placeBooking, setPlaceBooking] = useState([]);
    const [singlePackage, setSinglePackage] = useState({});
    // let { id } = useParams();


    useEffect(() => {
        fetch(`https://frightening-alien-79885.herokuapp.com/trips/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])


    const onSubmit = data => {
        console.log(data);

        axios.post('https://frightening-alien-79885.herokuapp.com/booking', data)
            .then(res => {
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


                    <form onSubmit={handleSubmit(onSubmit)}>
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
                    </form>


                </div>
                <img src={singlePackage?.img} alt="" />

            </div>



        </div>
    );
};

export default PlaceBook;