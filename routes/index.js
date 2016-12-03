'use strict';
const express = require('express');
const artist_data = require('../artist_data');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res, next) =>{
  res.render('landing', {
    title: 'Artists',
    description: 'PLACEHOLDER',
    artist_data
  })
});

db.SelectArtistAll().then(artists => {

  db.SelectVideoAll().then(videos => {

    db.SelectSocialAll().then(social => {

      db.SelectReleaseAll().then(releases => {

        db.SelectNewsAll().then(newsItems => {

          let count = 0;
          const artistCount  = artists.length;

          for (var i = 0; i < artists.length; i++) {

            const artist = artists[i];

            artist.social_links = social.find(link => artist.id === link.artist_id) || {};

            artist.videos = videos.filter(vid => artist.id === vid.artist_id).map(vid => vid.url);

            artist.releases = releases.filter(release => artist.id === release.artist_id).map(release => {
              delete release.artist_id;
              return release
            });

            artist.news = newsItems.filter(item =>
              artist.id === item.artist_id
            ).map(item => ({
              title: item.title,
              image: item.image,
              text: item.text
            }));

            if(artist.social_links) delete artist.social_links.artist_id;

            count++
          }

          if(count === artistCount){

            router.get(`/api/all_artist_data`, (req, res, next) =>{

              res.status(200).send(artists)

            });

            artists.forEach(artist =>{

              router.get(`/${artist.path}`, (req, res, next) =>{
                res.render('artist', {
                  title: artist.name,
                  artist
                })
              });

              router.get(`/api/${artist.path}`, (req, res, next) =>{

                res.status(200).send(artist)

              });

            });

          }

        });
      });
    });

  });

});

module.exports = router;
