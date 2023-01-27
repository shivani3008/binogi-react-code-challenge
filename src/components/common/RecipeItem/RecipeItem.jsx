import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import bookmarkBlack from 'assets/icons/bookmark_black_24dp.svg';
import bookmarkBorderBlack from 'assets/icons/bookmark_border_black_24dp.svg';
import { formatList } from 'utils/formatList';
import Card from 'components/common/Card';
import LocalStorage from 'modules/localStorage';

const RecipeItem = ({ recipe: { id, image, label, calories, dietLabels, healthLabels } }) => {
  const [isBookmarked, setIsBookmarked] = useState(LocalStorage.isBookmarked(id));

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    LocalStorage.toggleBookmark(id);
  };

  return (
    <Card>
      <div className="rounded-xl p-3 text-xs cursor-pointer">
        <img src={image} alt={label} className="rounded-lg w-full" />
        <div className="mt-2 flex justify-between items-center">
          <div className="text-sm truncate font-semibold" title={label}>
            {label}
          </div>
          <button type="button" onClick={toggleBookmark} title="Bookmark">
            <SVG src={isBookmarked ? bookmarkBlack : bookmarkBorderBlack} className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-2">
          <p>Calories</p>
          <p>{parseInt(calories)}</p>
          <p>Diet Labels</p>
          <p>{formatList(dietLabels)}</p>
          <p>Health Labels</p>
          <p>{formatList(healthLabels)}</p>
        </div>
      </div>
    </Card>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
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
