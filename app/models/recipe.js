var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  name:    { type: String },
  ingredients:     { type: Array },
  procedure:  { type: Array },
  source:   { type: String },
  images:  { type: Array },
  type:    { type: Array },
  date: { type: Date } 
});

module.exports = mongoose.model('Recipes', recipeSchema);
