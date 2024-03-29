import React, { useEffect, useState } from 'react';
import './AllBooking.css';

const AllBooking = () => {
    const [packages, setPakages] = useState([]);

    // get data to booking collection
    useEffect(() => {
        fetch('https://frightening-alien-79885.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, [])

    // delete booking collection data
    const handleDelete = (id) => {
        fetch(`https://frightening-alien-79885.herokuapp.com/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you Confirm??');
                    const remaining = packages.filter(user => user._id !== id);
                    setPakages(remaining);
                }
            })

    }

    return (
        <div className='container-fluid all-booking mt-5 pt-5 p-5'>

            <table class="table">
                <thead>
                    <tr className='table-head'>
                        <th scope="col">BokingId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Package Id</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        packages.map(singlePack => <tr className='table-data'>
                            <td>{singlePack._id}</td>
                            <td>{singlePack.user}</td>
                            <td>{singlePack.name}</td>
                            <td>{singlePack.id}</td>
                            <td>{singlePack.email}</td>
                            <td><button className='btn btn-success' >Approve</button></td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(singlePack._id)}>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>


        </div>
    );
};

export default AllBooking;