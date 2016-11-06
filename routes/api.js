'use strict';
const express = require('express');
const router = express.Router();
const db = require('../db');
const url = require('url');

const baseUrl = (
  process.env.NODE_ENV==='development'
    ? 'http://localhost:3000'
    : 'https://birdland-demo.herokuapp.com'
);

router.get('/', (req, res, next) => {
  res.send({
    all_artist_data: url.resolve(baseUrl, '/api/all_artist_data'),
    artists:{
      Britt_Margit: url.resolve(baseUrl, '/api/britt_margit'),
      Robyn_Sherwell: url.resolve(baseUrl, '/api/robyn_sherwell'),
      Elise_Legendre: url.resolve(baseUrl, '/api/elise_legendre'),
      Cages_Of_Light: url.resolve(baseUrl, '/api/cages_of_light'),
      Dogwood_Deart: url.resolve(baseUrl, '/api/dogwood_heart'),
      The_Fairylights: url.resolve(baseUrl, '/api/the_fairylights')
    }
  })
});

module.exports = router;