const knex = require('./knex');
const ArtistSelect = require('./queries/artist_select');

exports.Artist = () => knex('artist');

exports.SelectAllArtist = ArtistSelect.all;



