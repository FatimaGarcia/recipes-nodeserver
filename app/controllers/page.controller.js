var mongoose = require('mongoose');
var Recipes = require('../models/recipe.js');
mongoose.model('Recipes');

function PageController() {
    let index = function(req, res) {
        var title = "Recetas";
        var page = undefined;
        var recipes = undefined;
        if (req.query.page == "add"){
            title = "Añadir receta";
            page = "add";
        }
        if (req.query.page == "remove"){
            title = "Eliminar receta";
            page = "remove";
        }
        if (req.query.page == "list"){
            title = "Lista de recetas";
            page = "list";
            recipes = getRecipes(); 
            console.log(recipes);   
        }
        res.render('index', { 
            title: title,
            page: page,
            recipes: recipes
        });
    }

    let getRecipes = function() {
        var recipes = [];
        Recipes.find({}, function(err, recipes) {
            if(err) console.log(err);
            recipes = recipes
        });
        return recipes
    }

    return {
        index
    }
}

module.exports = new PageController();