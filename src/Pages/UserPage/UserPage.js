import React from 'react';
import {useSelector} from 'react-redux';

const UserPage = () => {
    const {user} = useSelector(state => state['userReducers']);


    return (
        <div>
            {user && <h4>{user.firstName}</h4>}
        </div>
    );
};

export {UserPage};