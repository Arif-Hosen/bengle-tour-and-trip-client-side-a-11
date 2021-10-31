import React, { useEffect, useState } from 'react';

const AllBooking = () => {
    const [packages, setPakages] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Do you Confirm??');
                    const remaining = packages.filter(user => user._id !== id);
                    setPakages(remaining);
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
                        packages.map(singlePack => <tr>
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

export default AllBooking;