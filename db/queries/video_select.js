const db = require('../');

exports.all = () =>{
  return db.Video().select('*')
};

exports.where = (artist_id) =>{
  return db.Video().select('*').where({artist_id})
};

