
const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/playlists');

router.get('/', playlistsCtrl.index);

//router.get('/:id', playlistsCtrl.show);
//router.post('/', playlistsCtrl.create);

//how to destroy the session
//router.get(“/logout”, (req, res) => {
    // destroy session and redirect to main page
   // req.session.destroy((err) => {
     // res.redirect(“/”);
   ///// })
//)};
    
module.exports = router;
