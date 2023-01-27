import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';

import Input from 'components/patterns/Input';
import { fetchRecipes } from 'api/recipe';
import RecipeItem from 'components/common/RecipeItem';
import Modal from 'components/patterns/Modal';
import useQuery from 'customHooks/useQuery';
import LocalStorage from 'modules/localStorage';
import search from 'assets/icons/search.svg';

import RecipeDetails from './RecipeDetails';

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [openRecipe, setOpenRecipe] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const query = useQuery();

  useEffect(() => {
    const getRecipesData = async () => {
      try {
        const { hits } = await fetchRecipes({
          q: searchValue,
        });

        setRecipesData(hits.map((hit) => ({ ...hit.recipe, id: hit.recipe.uri.split('#recipe_')?.[1] })));
      } catch (error) {
        console.log(error);
      }
    };

    getRecipesData();
  }, [searchValue]);

  return (
    <div>
      <Modal isOpen={!!openRecipe} onClose={() => setOpenRecipe(null)} showCloseButton>
        {openRecipe ? <RecipeDetails recipe={openRecipe} /> : null}
      </Modal>
      <Input
        type="text"
        value={searchValue}
        label="Search"
        hint="Search"
        onChange={setSearchValue}
        icon={<SVG src={search} className="h-5 w-5" />}
        debounceTime={1000}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-3">
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
