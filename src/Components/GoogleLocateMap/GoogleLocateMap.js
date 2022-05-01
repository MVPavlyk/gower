import React, {useCallback, useRef} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '100%'
};


const GoogleLocateMap = ({center}) => {
    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined;
    }, []);


    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

            <Marker position={center}>
            </Marker>
        </GoogleMap>
    );
};

export {GoogleLocateMap};