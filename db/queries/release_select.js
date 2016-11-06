const db = require('../');

exports.all = () =>{
  return db.Release().select('*')
};

exports.where = (artist_id) =>{
  return db.Release().select('*').where({artist_id})
};

