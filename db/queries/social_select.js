const db = require('../');

exports.all = () =>{
  return db.Social().select('*')
};

exports.where = (artist_id) =>{
  return db.Social().select('*').where({artist_id})
};

