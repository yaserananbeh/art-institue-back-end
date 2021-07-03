'use strict';
// const axios = require('axios');

const ArtPiece = require('../models/artic.mongoose.model');

// post controller
const createFavoriteArtPiece = (req, res) => {
  const { title,
    thumbnail,
    artist_name,
    description } = req.body;
  const slug = title.toLowerCase().split(' ').join('-');
  ArtPiece.find({ title: title }, (error, data) => {
    if (data.length > 0) {
      res.send('Data already Exist');
    }
    else {
      const newArtPiece = new ArtPiece({
        title: title,
        slug: slug,
        thumbnail: thumbnail,
        artist_name: artist_name,
        description: description
      });
      newArtPiece.save();
      res.send(newArtPiece);
    }
  });

};
// get controller
const getFavoriteArtPiece = (req, res) => {
  ArtPiece.find({}, (error, data) => {
    res.send(data);
  });
};
// delete controller
const deleteFavoriteArtPiece = (req, res) => {
  const slug = req.params.slug;
  ArtPiece.deleteOne({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error.message);
    }
    else {
      res.send(data);
      // ArtPiece.save();
    }
  });
  // res.send(`your title is ${title}`);

};
// put controller
const updateFavoriteArtPiece = (req, res) => {
  const slug = req.params.slug;
  const { description } = req.body;
  ArtPiece.findOne({slug:slug}, (error, data) => {
    if(error){
      res.send(error.message);
    }
    else{
      data.description=description;
      data.save();
      res.send(data);
    }
  });
};

module.exports = {
  createFavoriteArtPiece, getFavoriteArtPiece, deleteFavoriteArtPiece, updateFavoriteArtPiece
};
