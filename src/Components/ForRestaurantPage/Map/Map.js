import React, {useEffect, useState} from 'react';
import css from './Map.module.css';
import {Table} from '../Table/Table';
import {getPhoto} from '../../../root_functions/getPhoto';
import {useDispatch, useSelector} from 'react-redux';
import {getTablesOfPlace} from '../../../store';
import bg from '../../../img/bg.svg';
import {cloudUrl} from '../../../config/cloudUrl';


const Map = ({id}) => {
    const {placeTables} = useSelector(state => state['tableReducers']);

    const [mapBg, setMapBg] = useState();

    const dispatch = useDispatch();


    useEffect(() => {
        getPhoto(10, id).then(value => setMapBg(value.filePath));
        dispatch(getTablesOfPlace(id));
    }, []);

    return (
        <div className={css.map}>
            <img
                className={css.map_bg}
                src={`${cloudUrl}/images/${id}/MapBackground/10.svg`}
                alt="map"
            />
            {placeTables && !!placeTables.length && placeTables.map(table => <Table table={table} key={table.id}/>)}
        </div>
    );
};

export {Map};