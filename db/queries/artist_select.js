const db = require('../');

exports.all = () =>{
  return db.Artist().select('*')
};

