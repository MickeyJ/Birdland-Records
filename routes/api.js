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
      britt_margit: url.resolve(baseUrl, '/api/britt_margit'),
      robyn_sherwell: url.resolve(baseUrl, '/api/robyn_sherwell'),
      elise_legendre: url.resolve(baseUrl, '/api/elise_legendre'),
      cages_of_light: url.resolve(baseUrl, '/api/cages_of_light'),
      dogwood_heart: url.resolve(baseUrl, '/api/dogwood_heart'),
      the_fairylights: url.resolve(baseUrl, '/api/the_fairylights')
    }
  })
});

db.SelectArtistAll().then(artists => {

  db.SelectVideoAll().then(videos => {

    db.SelectSocialAll().then(social => {

      db.SelectReleaseAll().then(releases => {

        const artistCount  = artists.length;
        let count = 0;

        for (var i = 0; i < artists.length; i++) {

          const artist = artists[i];

          artist.social_links = social.find(link => artist.id === link.artist_id) || {};

          artist.videos = videos.filter(vid => artist.id === vid.artist_id).map(vid => vid.url);

          artist.releases = releases.filter(release => artist.id === release.artist_id).map(release => {
            delete release.artist_id;
            return release
          });

          if(artist.social_links) delete artist.social_links.artist_id;

          count++
        }

        if(count === artistCount){

          router.get(`/all_artist_data`, (req, res, next) =>{

            res.status(200).send(artists)

          });

          artists.forEach((x, i) => {
            router.get(`/${x.path}`, (req, res, next) =>{

              res.status(200).send(x)

            });
          })

        }

      });
    });

  });

});

module.exports = router;