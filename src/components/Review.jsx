import React, { PropTypes } from 'react';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


const Review = ({ comment }) => (
  <div>
    <Heading tag="h4">{comment.author}</Heading>
    <Paragraph>{comment.content}</Paragraph>
  </div>
);

Review.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Review;
