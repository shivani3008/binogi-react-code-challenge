# Binogi React Code Challenge

This code test involves the creation of a working React app using a 3rd party API. It’s designed to take 2-4 hours.

## The Challenge

Create a React web application for searching through the cooking recipes using the public API and implement a solution for bookmarking the recipes client-side.

The public recipes API is called [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api). You can signup for a developer account [here](https://developer.edamam.com/admin/applications/1409618537930).

The web application should include the following functionality:

- **Search form view**
    - display a search form with a searching query input field.
    - include advanced search filtering input fields for `diet`, `health`, `cuisineType`, `mealType`, `dishType` and `calories` range.
    - display search results list that consists of recipe `picture`, `label`, `calories`, `healthLabels` and `dietLabels`
    - button to load more results
- **Recipe info dialog/modal** that opens when a user clicks on recipe search result
    - display more information about the recipe like `ingredients`, `nutrients` and `digest` details.
    - include a button to bookmark the recipe
- **Bookmarked recipes view**
    - List of all bookmarked recipes.
    - Button to remove recipes from the list.

## Requirements and Restrictions

- The app must be built using React.
- Try to make the UI look nice (no need to overdo it).
- Feel free to use any libraries/plugins you can find.
- You should focus on code quality and structure.

#### Optional

- Implement a solution to store and manage state
	- Use state at least for handling bookmarks
- Use `localStorage` as a persistence layer for the state
- Use TypeScript
- Write some unit-tests

## Getting started

This repository is setup with `create-react-app` to get you started quickly. To start the app you just need to clone the repository and run the following commands:

```sh
# install node_modules
yarn
# start the app
yarn start
```
