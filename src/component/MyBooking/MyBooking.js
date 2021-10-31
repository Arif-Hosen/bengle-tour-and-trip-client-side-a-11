import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useContext';

const MyBooking = () => {
    const [packages, setPakages] = useState([]);
    const [Mypackages, setMyPakages] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, [])

    useEffect(() => {
        const myBook = packages.filter(pack => pack?.email == user?.email);
        setMyPakages(myBook);
    }, [packages])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Do you Confirm??');
                    const remaining = Mypackages.filter(user => user._id !== id);
                    setMyPakages(remaining);
                }
            })

    }

    return (
        <div className='mt-5 pt-5'>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">BokingId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Mypackages.map(singlePack => <tr>
                            <td>{singlePack._id}</td>
                            <td>{singlePack.name}</td>
                            <td>{singlePack.packagename}</td>
                            <td>{singlePack.email}</td>
                            <td><button onClick={() => handleDelete(singlePack._id)}>Cancel</button></td>
                        </tr>)
                    }


                </tbody>
            </table>


        </div>
    );
};

export default MyBooking;