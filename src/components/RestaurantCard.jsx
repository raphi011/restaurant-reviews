import React from 'react';
import Card from 'grommet/components/Card';

const RestaurantCard = () => (
  <Card
    style={{ padding: '10px' }}
    thumbnail="http://loremflickr.com/320/240/house"
    label="Sample Label"
    heading="Sample Heading"
    description="Sample description providing more details."
    />
);

export default RestaurantCard;
