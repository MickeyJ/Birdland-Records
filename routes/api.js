const express = require('express');
const router = express.Router();
const db = require('../db');
const url = require('url');

const baseUrl = (
  process.env.NODE_ENV==='development'
    ? 'http://localhost:3000'
    : 'https://birdland-demo.herokuapp.com'
);

router.get('/', (req, res, next) =>{
  res.send({
    artists_all: url.resolve(baseUrl, '/api/artist_data'),
    artist_1: url.resolve(baseUrl, '/api/artist_1'),
    artist_2: url.resolve(baseUrl, '/api/artist_2'),
    artist_3: url.resolve(baseUrl, '/api/artist_3'),
    artist_4: url.resolve(baseUrl, '/api/artist_4'),
    artist_5: url.resolve(baseUrl, '/api/artist_5'),
    artist_6: url.resolve(baseUrl, '/api/artist_6')
  })
});

db.SelectArtistAll().then(artists => {

  db.SelectVideoAll().then(videos => {

    db.SelectSocialAll().then(social => {

      db.SelectReleaseAll().then(releases => {

        for (var i = 0; i < artists.length; i++) {

          const artist = artists[i];

          artist.social_links = social.find(link => artist.id === link.artist_id);

          artist.videos = videos.filter(vid => artist.id === vid.artist_id).map(vid => vid.url);

          artist.releases = releases.filter(release => artist.id === release.artist_id).map(release => {
            delete release.artist_id;
            return release
          });

          if(artist.social_links) delete artist.social_links.artist_id

        }

        router.get(`/artist_data`, (req, res, next) =>{

          res.status(200).send(artists)

        });

        artists.forEach((x, i) => {
          router.get(`/artist_${i+1}`, (req, res, next) =>{

            res.status(200).send(x)

          });
        })

      });
    });

  });

});

module.exports = router;