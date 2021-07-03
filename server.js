'use strict';
const express = require('express');
require('dotenv').config();
const mongoose =require('mongoose');
const cors = require('cors');
const getArtData = require('./controllers/artic.controller');
const {
  createFavoriteArtPiece,
  getFavoriteArtPiece,
  deleteFavoriteArtPiece,
  updateFavoriteArtPiece
}= require('./controllers/artic.crud.controller');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT||8081;

mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


app.get('/',(req,res)=>res.send('hello gg'));
app.get('/art',getArtData);

// CRUD OPERATION

// creat a favorite
app.post('/art/favorite',createFavoriteArtPiece);
// get the favorites
app.get('/art/favorite',getFavoriteArtPiece);
// delete the favorite
app.delete('/art/favorite/:slug',deleteFavoriteArtPiece);
// update the favorite
app.put('/art/favorite/:slug',updateFavoriteArtPiece);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
