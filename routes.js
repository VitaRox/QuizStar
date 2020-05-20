const express = require('express')
const router = express.Router();
const Subject = require('./client/src/models/Subject')

router.get('/subjects', (req, res) =>{

  Subject.find({ })
    .then((data) =>{
      console.log('Data: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });

});


module.exports = router;
