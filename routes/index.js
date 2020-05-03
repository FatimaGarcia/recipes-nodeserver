var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

let recipesController = require("../app/controllers/recipes.controller.js");
let categoriesController = require("../app/controllers/ categories.controller.js");

router.get("/recipes", recipesController.getRecipes);
router.get("/recipes/:ingredient", recipesController.findRecipesByIngredients);
router.get("/recipe/:id", recipesController.findRecipesById);
router.post("/recipe" , recipesController.addRecipe);

router.get("/categories", categoriesController.getCategories);

module.exports = router;
