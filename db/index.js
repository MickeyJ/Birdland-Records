const knex = require('./knex');
const ArtistSelect = require('./queries/artist_select');
const VideoSelect = require('./queries/video_select');
const SocialSelect = require('./queries/social_select');
const ReleaseSelect = require('./queries/release_select');
const NewsSelect = require('./queries/news_select');

exports.Artist = () => knex('artist');
exports.Video = () => knex('video');
exports.Social = () => knex('social');
exports.Release = () => knex('release');
exports.News = () => knex('news');

exports.SelectArtistAll = ArtistSelect.all;

exports.SelectVideoAll = VideoSelect.all;
exports.SelectVideoWhere = VideoSelect.where;

exports.SelectSocialAll = SocialSelect.all;
exports.SelectSocialWhere = SocialSelect.where;

exports.SelectReleaseAll = ReleaseSelect.all;
exports.SelectReleaseWhere = ReleaseSelect.where;

exports.SelectNewsAll = NewsSelect.all;
exports.SelectNewsWhere = NewsSelect.where;


