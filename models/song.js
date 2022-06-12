const { Schema, model } = mongoose;

const songSchema = new Schema({
  song: { type: String, required: true },
composer: String,
});
const Song = model("Song", songSchema);


module.exports = Song;