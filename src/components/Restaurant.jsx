import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import Review from './Review';

const Restaurant = ({ restaurant }) => (
  <Box pad="medium">
    <Heading>{restaurant.name}</Heading>
    <Heading tag="h3">Reviews</Heading>
    <Box>
      {restaurant.comments.map((c, i) => (
        <Review key={i} review={c} />
      ))}
    </Box>
  </Box>
);

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default Restaurant;
