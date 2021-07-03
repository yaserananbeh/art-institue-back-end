'use strict';
const axios = require('axios');
require('dotenv').config();
const ArticModel =require('../models/artic.model');
const getArtData = (req, res) => {

  axios.get(`https://api.artic.edu/api/v1/artworks?limit=20`).then((response) => {
    const responseData=response.data.data.map(obj=>{
      return new ArticModel(obj);
    });
    res.send(responseData);
  }).catch(error=>{
    console.log(error.message);
    res.send(error.message);
  });

};
module.exports=getArtData;
