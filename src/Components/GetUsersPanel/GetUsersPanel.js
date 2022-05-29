import React, {useEffect} from 'react';
import css from './GetUsersPanel.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPaginated, setCurrent, setSize, setType} from '../../store/slices/getUsers.slice';
import {UserGeneralBlock} from '../UserGeneralBlock/UserGeneralBlock';

const GetUsersPanel = () => {

    const {users, allPages, currentPage, pageSize, userType} = useSelector(state => state['getUsersReducers']);

    const dispatch = useDispatch();

    const getPaginatedUsers = () => {
        dispatch(getAllPaginated({page: currentPage, pageSize}));
    };


    useEffect(() => {
        getPaginatedUsers();
    }, [currentPage, pageSize, userType]);


    useEffect(() => {
        dispatch(setCurrent(1));
    }, [userType, pageSize]);

    const prevPage = () => {
        if (currentPage !== 1) {
            dispatch(setCurrent(currentPage - 1));
        }
    };

    const nextPage = () => {
        if (currentPage !== allPages) {
            dispatch(setCurrent(currentPage + 1));
        }
    };


    const setUserPageSize = (page) => {
        dispatch(setSize(page));
    };

    const setUserType = (user) => {
        dispatch(setType(user));
    };

    return (
        <div className={css.get_users_panel}>
            <div className={css.panel_header}>
                <div className={css.page_size_wrap}>
                    <button
                        className={pageSize === 5 ? css.page_size_btn_active : css.page_size_btn}
                        onClick={() => setUserPageSize(5)}
                    >
                        5
                    </button>
                    <button
                        className={pageSize === 10 ? css.page_size_btn_active : css.page_size_btn}
                        onClick={() => setUserPageSize(10)}
                    >
                        10
                    </button>
                    <button
                        className={pageSize === 20 ? css.page_size_btn_active : css.page_size_btn}
                        onClick={() => setUserPageSize(20)}
                    >
                        20
                    </button>
                </div>

                <div className={css.user_type_wrap}>
                    <button
                        className={userType === 'User' ? css.user_type_btn_active : css.user_type_btn}
                        onClick={() => setUserType('User')}
                    >
                        User
                    </button>
                    <button
                        className={userType === 'PlaceOwner' ? css.user_type_btn_active : css.user_type_btn}
                        onClick={() => setUserType('PlaceOwner')}
                    >
                        Owner
                    </button>
                    <button
                        className={userType === 'Admin' ? css.user_type_btn_active : css.user_type_btn}
                        onClick={() => setUserType('Admin')}
                    >
                        Admin
                    </button>
                </div>

                <div className={css.pages_switch_wrap}>
                    <button className={css.page_size_btn} onClick={() => prevPage()}> {'<'} </button>
                    <div className={css.page_size_btn}>{currentPage}</div>
                    <button className={css.page_size_btn} onClick={() => nextPage()}> {'>'} </button>
                </div>
            </div>
            <div className={css.users_block}>
                <div className={css.users_block_header}>
                    <div className={css.id}>ID</div>
                    <div className={css.name}>NAME</div>
                    <div className={css.email}>EMAIL</div>
                </div>
                {users.map(user => <UserGeneralBlock key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {GetUsersPanel};