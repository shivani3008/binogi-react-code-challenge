import React, { useEffect, useState } from 'react';

import { fetchRecipes } from 'api/recipe';
import RecipeItem from 'components/common/RecipeItem';
import Modal from 'components/patterns/Modal';
import useQuery from 'customHooks/useQuery';
import LocalStorage from 'modules/localStorage';

import RecipeDetails from './RecipeDetails';

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [openRecipe, setOpenRecipe] = useState(null);
  const query = useQuery();

  useEffect(() => {
    const getRecipesData = async () => {
      try {
        const { hits } = await fetchRecipes({
          q: 'chicken',
        });

        setRecipesData(hits.map((hit) => ({ ...hit.recipe, id: hit.recipe.uri.split('#recipe_')?.[1] })));
      } catch (error) {
        console.log(error);
      }
    };

    getRecipesData();
  }, []);

  return (
    <div>
      <Modal isOpen={!!openRecipe} onClose={() => setOpenRecipe(null)} showCloseButton>
        {openRecipe ? <RecipeDetails recipe={openRecipe} /> : null}
      </Modal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {recipesData
          .filter((recipe) => !Boolean(query.get('bookmarked')) || LocalStorage.isBookmarked(recipe.id))
          .map((recipe) => {
            return (
              <div key={recipe.id} className="flex-1 flex" onClick={() => setOpenRecipe(recipe)}>
                <RecipeItem recipe={recipe} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recipes;
