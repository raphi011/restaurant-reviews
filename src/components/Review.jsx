import React from 'react';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Timestamp from 'grommet/components/Timestamp';

import Stars from './Stars';
import { reviewProp } from '../propTypes';

const Review = ({ review }) => (
  <div>
    <Heading tag="h4" strong>{review.author}</Heading>
    <Timestamp value={review.added} />
    <Paragraph>{review.content}</Paragraph>
    <Stars size="medium" stars={review.stars} selectable={false} />
  </div>
);

Review.propTypes = {
  review: reviewProp.isRequired,
};

export default Review;
