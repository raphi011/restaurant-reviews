import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import MapLocationIcon from 'grommet/components/icons/base/MapLocation';

import { restaurantProp } from '../propTypes';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { update } from '../localStorage';

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.addNewReview = this.addNewReview.bind(this);
  }

  componentDidUpdate() {
    if (this.heading) {
      this.heading.focus();
    }
  }

  addNewReview(review) {
    const { restaurant } = this.props;

    restaurant.reviews.unshift(review);

    update(restaurant);

    this.forceUpdate();
  }

  render() {
    const { restaurant } = this.props;

    if (!restaurant) {
      return <Heading>No Restaurant selected.</Heading>;
    }

    return (
      <div>
        <Box pad="medium">
          <Image alt="Restaurant Image" src="http://loremflickr.com/320/240/house" full="horizontal" />
          <Heading>
            {restaurant.name}
          </Heading>
          <Columns>
            <div>
              <span>
                <MapLocationIcon />
              </span>
              <span>
                <address>
                  {restaurant.address.street}<br />
                  {restaurant.address.postal} {restaurant.address.city}<br />
                  {restaurant.address.country}
                </address>
              </span>
            </div>
          </Columns>
          <Heading tag="h3">Reviews</Heading>
          <ReviewForm onNewReview={this.addNewReview} />
          <List>
            {restaurant.reviews.map((r, i) => (
              <ListItem key={i}>
                <Review review={r} />
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    );
  }
}


Restaurant.propTypes = {
  restaurant: restaurantProp,
};

export default Restaurant;
