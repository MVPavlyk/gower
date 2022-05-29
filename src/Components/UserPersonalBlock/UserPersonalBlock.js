import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './UserPersonalBlock.module.css';
import confirm from '../../img/confirm.svg';
import confirm_grey from '../../img/confirm_grey.svg';
import {getUserRoles, setRoles, setRolesToUpdate, updateUserRoles} from '../../store/slices/getUsers.slice';


const UserPersonalBlock = () => {
    const {oneUser, oneUserRoles, rolesToUpdate} = useSelector(state => state['getUsersReducers']);

    const dispatch = useDispatch();

    const [allow, setAllow] = useState(false);

    useEffect(() => {
        oneUser && dispatch(getUserRoles(oneUser.id));
    }, [oneUser]);


    const isRole = (role) => {
        return !!rolesToUpdate.includes(role);
    };

    const addUserRole = (role) => {
        if (rolesToUpdate.includes(role)) {
            const array = rolesToUpdate.filter(element => element !== role);
            dispatch(setRolesToUpdate(array));
        } else {
            const array = [...rolesToUpdate];
            array.push(role);
            dispatch(setRolesToUpdate(array));
        }
    };



    useEffect(() => {
        if (JSON.stringify(oneUserRoles) === JSON.stringify(rolesToUpdate)) {
            setAllow(false);
        } else {
            setAllow(true);
        }
    }, [oneUserRoles, rolesToUpdate]);


    const updateRoles = () => {
        const userId = oneUser.id;
        if (allow) {
            dispatch(updateUserRoles({id: userId, userRoles: rolesToUpdate})).then(dispatch(setRoles(rolesToUpdate)));
        }
    };


    return (
        <>
            {oneUser &&
                <div className={css.one_user_wrap}>
                    <div className={css.one_user_header}>
                        {oneUser.id}) {oneUser.firstName} {oneUser.lastName}
                    </div>
                    <div>
                        Email: {oneUser.email}
                    </div>
                    <div>Roles:</div>
                    <div className={css.roles_wrap}>
                        <button
                            onClick={() => addUserRole('User')}
                            className={isRole('User') ? css.active_role : css.role}>
                            User
                        </button>
                        <button
                            onClick={() => addUserRole('PlaceOwner')}
                            className={isRole('PlaceOwner') ? css.active_role : css.role}>
                            Place owner
                        </button>
                        <button
                            onClick={() => addUserRole('Admin')}
                            className={isRole('Admin') ? css.active_role : css.role}>
                            Admin
                        </button>
                        <div onClick={() => updateRoles()}>
                            <img src={allow ? confirm : confirm_grey} alt="confirm"/>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

export {UserPersonalBlock};