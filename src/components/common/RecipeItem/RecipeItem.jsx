import React from 'react';
import PropTypes from 'prop-types';

import { formatList } from 'utils/formatList';
import Card from 'components/common/Card';

const RecipeItem = ({ recipe: { image, label, calories, dietLabels, healthLabels } }) => (
  <Card>
    <div className="rounded-xl p-3 text-xs cursor-pointer">
      <img src={image} alt={label} className="rounded-lg w-full" />
      <div className="mt-2 text-sm truncate font-semibold" title={label}>
        {label}
      </div>
      <div className="grid grid-cols-2">
        <p>Calories</p>
        <p>{parseInt(calories)}</p>
        <p>Diet Labels</p>
        <p>{formatList(dietLabels, 3)}</p>
        <p>Health Labels</p>
        <p>{formatList(healthLabels, 3)}</p>
      </div>
    </div>
  </Card>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string,
    calories: PropTypes.number,
    dietLabels: PropTypes.array,
    healthLabels: PropTypes.array,
  }),
};

RecipeItem.defaultProps = {
  recipe: {},
};

export default RecipeItem;
