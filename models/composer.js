
 const mongoose = require('mongoose');
 const { Schema, model } = mongoose;
const songSchema = new Schema({
  name: { type: String, required: true },
  audio: {type: String },
})
const composerSchema = new Schema({
  name: { type: String, required: true },
  songs: [songSchema],
  playlists: [{type: Schema.Types.ObjectId, 
  ref: "Playlist"}]
});
const Composer = model("Composer", composerSchema);
const Song = model("Song", songSchema)

module.exports = Composer;
//module.exports = Song;