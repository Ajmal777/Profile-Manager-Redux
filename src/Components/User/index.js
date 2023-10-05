import React from 'react';
import './style.css'
import Button from '../Button';
import { Link } from 'react-router-dom';

const User = ({ userData }) => {
    return (
        <tr className='tr-user'>
            <td>{userData.id}</td>
            <td className='td-avatar'><img src={userData.avatar} alt={userData.first_name} /></td>
            <td>{userData.first_name} {userData.last_name}</td>
            <td className='td-email'>
                {userData.email}
                <Button className='edit-btn btn-primary'>
                    <Link to={`/update/${userData.id}`}>Edit</Link>
                </Button>
            </td>
        </tr>
    );
}

export default User;