import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import css from './OwnerPage.module.css';
import {getMyPlaces} from '../../store/slices/owner.slice';
import {MyPlaceBlock} from '../../Components';

const OwnerPage = () => {
    const {user, roles} = useSelector(state => state['userReducers']);

    const {places} = useSelector(state => state['ownerReducers']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyPlaces());
    }, []);

    if (!(!!roles.length && roles.includes('PlaceOwner'))) {
        return <Navigate to="/" replace/>;
    }
    return (
        <div className={css.owner_page}>
            {!!places.length && places.map(place => <MyPlaceBlock place={place} key={place.id}/>)}
        </div>
    );
};

export {OwnerPage};