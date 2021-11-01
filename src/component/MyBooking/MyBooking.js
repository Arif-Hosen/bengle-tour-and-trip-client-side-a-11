import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useContext';
import './MyBooking.css';

const MyBooking = () => {
    const [packages, setPakages] = useState([]);
    const [Mypackages, setMyPakages] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://frightening-alien-79885.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, [])

    useEffect(() => {
        const myBook = packages.filter(pack => pack?.email == user?.email);
        setMyPakages(myBook);
    }, [packages])

    const handleDelete = (id) => {

        fetch(`https://frightening-alien-79885.herokuapp.com/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure you wish to delete this item?')
                    const remaining = Mypackages.filter(user => user._id !== id);
                    setMyPakages(remaining);

                }
            })

    }

    return (
        <div className='my-booking mt-5 pt-5 p-4 '>

            <table className="table">
                <thead>
                    <tr className='my-table-head'>
                        <th scope="col">Booking Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Package Id</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Mypackages.map(singlePack => <tr className='my-table-data'>
                            <td>{singlePack._id}</td>
                            <td>{singlePack.name}</td>
                            <td>{singlePack.description}</td>
                            <td>{singlePack.number}</td>
                            <td>{singlePack.email}</td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(singlePack._id)}>Cancel</button></td>
                        </tr>)
                    }


                </tbody>
            </table>


        </div>
    );
};

export default MyBooking;