const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  이름: String,
  종류: String,
  세부_종류: String,
  레시피_이미지_파일_URL: String,
  음식_이미지_파일_URL: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;