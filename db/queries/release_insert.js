const db = require('../');

exports.insertRelease = () =>{
  const artist_id = 2;
  const date = '7 September 2014';
  const image = 'images/releases/ugly.jpeg';
  const apple_music = 'https://itun.es/us/3J5Q4';
  const itunes = 'https://itunes.apple.com/us/album/islander-single/id950769911';
  const spotify = 'https://open.spotify.com/album/0dEw6OXZ4FA6NZXPLwp3NV';

  return db.Release()
    .insert({artist_id, date, image, apple_music, itunes, spotify})
    .returning('*')

};