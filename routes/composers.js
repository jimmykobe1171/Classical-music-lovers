const express = require('express');
const router = express.Router();
const composersCtrl = require('./controllers/composers');
// You Do - Require the yet to be created reviews controller 
router.post('/movies/:id/reviews', composersCtrl.create)//

module.exports = router;

