import { PropTypes } from 'react';

export const reviewProp = PropTypes.shape({
  author: PropTypes.string,
  content: PropTypes.string,
  stars: PropTypes.number,
  added: PropTypes.string,
});

const addressProp = PropTypes.shape({
  postal: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
});

export const restaurantProp = PropTypes.shape({
  name: PropTypes.string,
  cuisine: PropTypes.string,
  address: addressProp,
  imageUrl: PropTypes.string,
  reviews: PropTypes.arrayOf(reviewProp),
});
