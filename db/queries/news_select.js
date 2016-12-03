const db = require('../');

exports.all = () =>{
  return db.News().select('*')
};

exports.where = (artist_id) =>{
  return db.News().select('*').where({artist_id})
};