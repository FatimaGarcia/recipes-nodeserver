var mongoose = require('mongoose');
var Category = require('../models/category.js');
mongoose.model('Category');

function CategoriesController() {    
    let getCategories = function(req, res) {
        Category.find(function(err, categories) {
            if(err) res.send(500, err.message);
            console.log('GET /categories');
                res.status(200).jsonp(categories);
            });
    }

    return {
        getCategories
    }
}

module.exports = new CategoriesController();