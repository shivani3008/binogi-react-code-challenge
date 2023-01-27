import React, { useEffect, useState } from 'react';

import { fetchRecipes } from 'api/recipe';
import RecipeItem from 'components/common/RecipeItem';

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    const getRecipesData = async () => {
      try {
        const { hits } = await fetchRecipes({
          q: 'chicken',
        });

        setRecipesData(hits.map((hit) => hit.recipe));
      } catch (error) {
        console.log(error);
      }
    };

    getRecipesData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {recipesData.map((recipe, index) => (
        <div className="flex-1 flex" key={index}>
          <RecipeItem recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
