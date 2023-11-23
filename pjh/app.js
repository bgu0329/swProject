const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./dbFrame');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// MongoDB Atlas 연결 URI
const mongoURI =
  'mongodb+srv://bgu03291:qwedqwed123@swproject.cp4op2b.mongodb.net/swProject';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.get('/api/getRecipes', async (req, res) => {
  try {
    const category = req.query.category;
    const subcategory = req.query.subcategory;

    const query = {};
    if (category) {
      query['종류'] = category;
    }
    if (subcategory) {
      query['세부_종류'] = subcategory;
    }

    const recipes = await Recipe.find(query);

    if (recipes.length === 0) {
      res.status(404).json({ error: 'No recipes found for the given criteria' });
    } else {
      const recipeImageUrls = recipes.map((recipe) => recipe.음식_이미지_파일_URL);
      res.json(recipeImageUrls);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
