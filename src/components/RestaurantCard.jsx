import React, { PropTypes } from 'react';
import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';

import { restaurantProp } from '../propTypes';

const RestaurantCard = ({ restaurant }) => (
  <Card
    style={{ padding: '10px', maxWidth: '365px' }}
    thumbnail={`/imgs/${restaurant.id}.jpg`}
    label={restaurant.cuisine}
    heading={restaurant.name}
    description={restaurant.address.city}
    />
);

RestaurantCard.propTypes = {
  restaurant: restaurantProp,
  onClick: PropTypes.func,
};

export default RestaurantCard;
