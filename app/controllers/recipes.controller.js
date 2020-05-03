var mongoose = require('mongoose');
var Recipes = require('../models/recipe.js');
mongoose.model('Recipes');

function RecipesController() {    
    let getRecipes = function(req, res) {
        var query = {}
        if(req.query.type != undefined) {
            query = {type: JSON.parse(req.query.type)}
        }
        Recipes.find(query, function(err, recipes) {
            if(err) res.send(500, err.message);
            console.log('GET /recipes')
                res.status(200).jsonp(recipes);
            });
    }

    let findRecipesByIngredients = function(req, res){
        let ingredient = req.params.ingredient; 
        let query = { "ingredients": { "$regex": ingredient, "$options": "i" } };
        Recipes.find(query,  function(err,recipes) { 
            res.status(200).jsonp(recipes);
        });
    }
    
    let findRecipesById = function(req,res) {
        let id = req.params.id;
        Recipes.findById(id, function(err, recipe) {
            if(err) res.status(500).send(err.message);
            console.log('GET /recipes/'+id);
                res.status(200).jsonp(recipe);
        });
    }

    let addRecipe = function(req, res) {
        var recipe = new Recipes({
            name: req.body.name,
            ingredients: req.body.ingredients,
            procedure:req.body.procedure,
            source: req.body.source,
            images: req.body.images,
            type: req.body.type,
            date: Date.now()
        });
        recipe.save(function(err, tvshow) {
            if(err) return res.status(500).send( err.message);
            res.status(200).jsonp(recipe);
        });
    
    }

    return {
        getRecipes,
        findRecipesByIngredients,
        findRecipesById,
        addRecipe
    }
}

module.exports = new RecipesController();