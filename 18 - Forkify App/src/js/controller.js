import * as model from './model';
import { MODAL_CLOSE_SEC } from './config';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';

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
    bookmarksView.update(model.state.bookmarks);

    //1) Loading Recipe
    await model.loadRecipe(id);

    //2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
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
  model.updateServings(newServings);
  //Update the recipe view.
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) update recipe view
  recipeView.update(model.state.recipe);

  // 3) render bookmarks view
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // 0) Render spinner
    addRecipeView.renderSpinner();

    // 1) add/upload recipe
    await model.uploadRecipe(newRecipe);

    // 2) render recipe view
    recipeView.render(model.state.recipe);

    // 3) Success Message
    addRecipeView.renderMessage();

    // 4) render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    // 5) Change id in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // 5) Close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(`🧨🧨 ${err} 🧨🧨`);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
