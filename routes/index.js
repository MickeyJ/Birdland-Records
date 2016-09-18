var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>{
  res.render('artists', {
    title: 'Artists',
    description: 'PLACEHOLDER'
  })
});

module.exports = router;
