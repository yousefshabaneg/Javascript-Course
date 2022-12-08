import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    //0) update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //1) Loading Recipe
    await model.loadRecipe(id);

    //2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    //1) Loading Search Results
    await model.loadSearchResults(query);

    //2) Rendering results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //3) Render Pagination buttons.
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  //Render New Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //Render New Pagination buttons.
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update recipe servings (in state)
  console.log(newServings);
  model.updateServings(newServings);
  //Update the recipe view.
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
