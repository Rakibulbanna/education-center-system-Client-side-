import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const Profile = () => {
    const { user } = useAuth();
    return (
        <div className='text-center'>
            <h2>{user.displayName}</h2>
            <h2>{user.email}</h2>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Profile;