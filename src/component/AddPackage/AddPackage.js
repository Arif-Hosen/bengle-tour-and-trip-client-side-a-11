import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    // react hook form
    const onSubmit = data => {
        // data send to db by axios
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
        <div className='m-5 mx-auto'>

            <div className='m-5 p-5 text-center'>
                <h2 className='m-5'>Add a Packages</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-50 m-3' {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />
                    <br />
                    <textarea className='w-50 m-3' {...register("description")} placeholder="Decription" />
                    <br />
                    <input className='w-50 m-3'  {...register("number", { required: true })} placeholder="Price" />
                    <br />
                    <input className='w-50 m-3'  {...register("img", { required: true })} />
                    <br />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;