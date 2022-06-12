
const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/playlists');

router.get('/', playlistsCtrl.index);
router.get('/new', playlistsCtrl.new);
router.get('/:id', playlistsCtrl.show);
router.post('/', playlistsCtrl.create);
router.delete('/song/:name', .deleteOneSong);

module.exports = router;
