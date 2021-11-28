import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    // react hook form
    const onSubmit = data => {
        // data send to db by axios
        console.log(data)
        axios.post('https://frightening-alien-79885.herokuapp.com/trips', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();

                }
            })

    }

    return (
        <div className='mt-5 mx-auto add-package'>

            <div className='m-5 text-center package-part w-50'>
                <h2 className='m-4 text-light'>Add a Package</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-75 m-3' {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />
                    <br />
                    <textarea className='w-75 m-3' {...register("description")} placeholder="Decription" />
                    <br />
                    <input className='w-75 m-3'  {...register("cost", { required: true })} placeholder="Price" />
                    <br />
                    <input className='w-75 m-3'  {...register("img", { required: true })} placeholder="image url" />
                    <br />

                    <input className='btn btn-warning w-25 m-3' type="submit" value='Add Package' />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;