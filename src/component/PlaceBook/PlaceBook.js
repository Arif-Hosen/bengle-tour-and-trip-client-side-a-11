import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useContext';

const PlaceBook = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    console.log(id);

    // const [placeBooking, setPlaceBooking] = useState([]);
    const [singlePackage, setSinglePackage] = useState({});
    // let { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/trips/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])


    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/booking', data)
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
                <div className='p-5'>
                    <h3>{singlePackage?.name}</h3>
                    <p>{singlePackage?.description}</p>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-50 m-3' value={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <br />
                        <input className='w-50 m-3' value={user.email} {...register("email")} placeholder="" />
                        <br />
                        <input className='w-50 m-3' value={singlePackage?.name} {...register("packagename")} placeholder="" />
                        <br />
                        <input className='w-50 m-3' value={singlePackage._id} {...register("packageid")} />
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