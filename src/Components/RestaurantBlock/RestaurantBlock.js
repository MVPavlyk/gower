import React from 'react';

const RestaurantBlock = ({restaurant}) => {
    return (
        <div>
            <img src={
                restaurant.id === 1 ? require('../../img/u_marty.png') :  require('../../img/panorama.png')
            } alt={restaurant.name}/>
            <h4>{restaurant.name}</h4>
        </div>
    );
};

export {RestaurantBlock};