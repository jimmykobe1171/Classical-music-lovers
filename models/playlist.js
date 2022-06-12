const mongoose = require("./connection");

const { Schema, model } = mongoose;

const playlistSchema = new Schema({
  song: { type: String, required: true },
  username: String,
});
const Playlist = model("Playlist", playlistSchema);


module.exports = Playlist;