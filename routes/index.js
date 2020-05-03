var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

let recipesController = require("../app/controllers/recipes.controller.js");
router.get("/recipes", recipesController.getAllRecipes);
router.get("/recipes/:ingredient", recipesController.findRecipesByIngredients);
router.get("/recipe/:id", recipesController.findRecipesById);
router.post("/recipe" , recipesController.addRecipe);

module.exports = router;
