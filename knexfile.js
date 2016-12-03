
module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host     : 'birdlanddb.cpkkdldhwpax.us-west-2.rds.amazonaws.com',
      user     : 'mickey',
      password : process.env.BL_DB_PASSWORD,
      database : 'birdland',
      charset: 'utf8'
    },
    ssl: false,
    pool: {
      min: 0,
      max: 7
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host     : 'birdlanddb.cpkkdldhwpax.us-west-2.rds.amazonaws.com',
      user     : 'mickey',
      password : process.env.BL_DB_PASSWORD,
      database : 'birdland',
      charset: 'utf8'
    },
    ssl: false,
    pool: {
      min: 0,
      max: 7
    }
  }

};


