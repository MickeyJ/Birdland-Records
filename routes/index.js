const express = require('express');
const router = express.Router();
const artist_data = require('../artist_data');

router.get('/', (req, res, next) =>{
  res.render('landing', {
    title: 'Artists',
    description: 'PLACEHOLDER',
    artist_data
  })
});

artist_data.forEach(artist =>{
  router.get(`/${artist.path}`, (req, res, next) =>{
    res.render('artist', {
      title: artist.name,
      artist
    })
  })
});

module.exports = router;
