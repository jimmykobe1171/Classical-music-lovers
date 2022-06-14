const mongoose = require("./connection");

const { Schema, model } = mongoose;

const playlistSchema = new Schema({
  songs: [{ type: Schema.Types.ObjectId,
    ref: "Song"}],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});
const Playlist = model("Playlist", playlistSchema);


module.exports = Playlist;