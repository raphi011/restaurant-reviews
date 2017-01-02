import React from 'react';
import Card from 'grommet/components/Card';
import { restaurantProp } from '../propTypes';

const RestaurantCard = ({ restaurant }) => (
  <Card
    style={{ padding: '10px' }}
    thumbnail="http://loremflickr.com/320/240/house"
    label={restaurant.cuisine}
    heading={restaurant.name}
    description={restaurant.address.city}
    />
);

RestaurantCard.propTypes = {
  restaurant: restaurantProp,
};

export default RestaurantCard;
