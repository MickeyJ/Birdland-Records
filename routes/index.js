const express = require('express');
const router = express.Router();
const artist_data = require('../artist_data');
const db = require('../db');

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

router.get('/artist_data', (req, res, next) =>{
  res.send(artist_data)
});

router.get('/db_data', (req, res, next) =>{
  db.SelectAllArtist().then(data =>{
    res.status(200).send(data)
  });
});

module.exports = router;
