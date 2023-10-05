import React from 'react';
import { useSelector } from 'react-redux';
import User from '../Components/User';
import '../Styles/home.css'
const Home = () => {
    const users = useSelector(state => state);

    return (
        <>
            <div className='home'>
                <table className='users-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 && users.map((user, index) => {
                            return (
                                <User userData={user} key={index} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;