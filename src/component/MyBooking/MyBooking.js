import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useContext';
import './MyBooking.css';

const MyBooking = () => {
    const [packages, setPakages] = useState([]);
    const [Mypackages, setMyPakages] = useState([]);
    // get user from useAuth by contex api
    const { user } = useAuth();
    // getting data from booking collection
    useEffect(() => {
        fetch('https://frightening-alien-79885.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, [])
    // if collection email of db and login user email is same then user can be my booking . filter data and set an state
    useEffect(() => {
        const myBook = packages.filter(pack => pack?.email == user?.email);
        setMyPakages(myBook);
    }, [packages])

    // delete api
    const handleDelete = (id) => {

        fetch(`https://frightening-alien-79885.herokuapp.com/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // after data load ,we get deletedCount property from server response
                if (data.deletedCount > 0) {
                    alert('Are you sure you wish to cancel booking ???')
                    // condition check if clicked data's id didn't match mypakages id, it will be added Mypackages state
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
                        <th scope="col">Package Name</th>
                        <th scope="col">Package Id</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Mypackages.map(singlePack => <tr className='my-table-data'>
                            <td>{singlePack._id}</td>
                            <td>{singlePack.user}</td>
                            <td>{singlePack.name}</td>
                            <td>{singlePack.id}</td>
                            <td>{singlePack.email}</td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(singlePack._id)}>Cancel Booking</button></td>
                        </tr>)
                    }


                </tbody>
            </table>


        </div>
    );
};

export default MyBooking;