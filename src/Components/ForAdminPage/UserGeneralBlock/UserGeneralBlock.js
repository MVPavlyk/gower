import React from 'react';
import css from './UserGeneralBlock.module.css';
import {useDispatch} from 'react-redux';
import {getOneUser} from '../../../store/slices/getUsers.slice';

const UserGeneralBlock = ({user}) => {
    const dispatch = useDispatch();

    return (
        <>
            {user &&
                <div className={css.user_wrap} onClick={() => dispatch(getOneUser(user.id))}>
                    <div className={css.id}>{user.id}</div>
                    <div className={css.name}>{user.firstName} {user.lastName}</div>
                    <div className={css.email}>{user.email}</div>
                </div>
            }
        </>
    );
};

export {UserGeneralBlock};