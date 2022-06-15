const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/playlists');






const Playlist = require('../models/playlist');
const Song = require('../models/song');
// const composersCtrl = require('./controllers/composers');
const composers = require('../data/composers.js');
const { ServerOpeningEvent } = require('mongodb');
const res = require('express/lib/response');
const User = require('../models/user');


// router.get("/", (req, res) => {
//     Playlist.find({})
//         .then(playlists => {
//             res.render("playlist/index.liquid",
//                 { playlists });

//         })
//         .catch(error => {
//             res.json(error)
//         })
// });


router.post("/:id/playlist", (req, res) => {

    User.find({ username: req.session.username })
        .then(findUser => {
            console.log("this is user", findUser)
            Playlist.findOneAndUpdate({ owner: findUser._id })
                .then(playlists => {
                    playlists.songs.push(req.params.id)
                    playlists.save()
                    console.log(playlists, "this users playlist")
                    res.redirect("/playlists");

                })
                .catch(error => {
                    res.json(error)
                })

        })
});



router.get('/', (req, res) => {
    User.findOne({ username: req.session.username })
        .then(findUser => {
            console.log("this is user", findUser._id)
            return findUser
        })
        .then(findUser => {
            console.log(findUser)
            Playlist.find({ owner: findUser._id })
                .populate('songs')
                .exec()
                .then(playlist => {
                    res.send(playlists)
                    // res.render("playlist/index.liquid", { playlist });
                })
        })
        .catch(error => {
            res.json(error)
        })

})




// router.get("/", (req, res) => {
//     Playlist.find({})
//     .then(playlists=>{
//         res.render("playlists/index.liquid",
//         {  playlists });

//     })
//     .catch(error =>{
//         res.json(error)
//     })
// });
// router.get("/:id",(req, res)=>{
//     Playlist.findById(req.params.id)
//     .then(playlist=>{
//         res.render("composers/show.liquid",{playlist})
//        console.log(playlist)


//     })
//     .catch(error =>{
//         res.json(error)
//     })
// })



// router.get('/:id/edit', (req, res) => {
//     res.render('edit',
//      { data: Playlist[req.params.id], 
//         index: req.params.id});
//     });




//         router.delete('/:id', (req, res) => {
//             //remove item from array
//             Playlist.splice(req.params.id, 1)
//             res.redirect('/playlists')//redirect back to index 
//         })

//         
//         router.put('/:id',(req, res)=>{
//             console.log(req.body)
//             Playlist[req.params.id]=req.body
//             res.redirect('/')

//         })


//         router.get('/:id', (req, res) => {
//             res.render('show', { data: Playlist[req.params.id] });
//         });
//         router.get("/:id", (req, res) => {
//             // get the id from params
//             const id = req.params.id;

//             // find the particular fruit from the database
//             Playlist.findById(id)
//               .then((playlist) => {
//                 // render the template with the data from the database
//                 res.render("playlists/show.liquid", { playlist });
//               })
//               .catch((error) => {
//                 console.log(error);
//                 res.json({ error });
//               });
//           });






// router.get("/new", (req, res)=>{
//     res.render(playlists/new.liquid)
// });
// Playlist.findById(id)
// .populate("songs")
// .exec(function (err, playlist){
//     res.render('playlists/show',{playlist, username})
//     Song.find({
//         _id:
//     })
// })


module.exports = router;