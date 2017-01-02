import React, { PropTypes } from 'react';

import StarIcon from 'grommet/components/icons/base/Star';
import Button from 'grommet/components/Button';

const MAX = 5;

const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;

function onClick(selectable, stars, onSelect) {
  if (!selectable) return;

  onSelect(stars);
}

function onKeyDown(e, selectable, stars, onSelect) {
  if (!selectable) return;

  let newStars;

  switch (e.keyCode) {
    case VK_UP:
    case VK_LEFT: {
      e.preventDefault();
      newStars = stars === 1 ? 5 : stars - 1;
      break;
    }
    case VK_DOWN:
    case VK_RIGHT: {
      e.preventDefault();
      newStars = ((stars) % 5) + 1;
      break;
    }
    default: return;
  }

  onSelect(newStars);
}

const Stars = ({ stars, onSelect, selectable, size, ...props }) => {
  const starIcons = [];

  for (let i = 0; i < MAX; i++) {
    const starProps = {
      key: i,
      size,
    };

    if (i >= stars) starProps.style = { opacity: 0.5 };

    if (selectable) {
      starProps.onClick = () => onClick(selectable, i + 1, onSelect);
      starProps.role = 'radio';
      /* starProps['aria-label'] = i + 1; */

      if ((i + 1) === stars) {
        starProps['aria-checked'] = 'true';
      } else {
        starProps['aria-checked'] = 'false';
      }
    }

    starIcons.push(<StarIcon {...starProps} />);
  }

  const controlProps = {};

  if (selectable) {
    controlProps.onKeyDown = e => onKeyDown(e, selectable, stars, onSelect);
    controlProps.tabIndex = '0';
    controlProps.role = 'radiogroup';
  }

  return (
    <div {...props} {...controlProps} >
      {starIcons}
    </div>
  );
};

Stars.propTypes = {
  size: PropTypes.string,
  stars: PropTypes.number,
  onSelect: PropTypes.func,
  selectable: PropTypes.bool,
};

export default Stars;
