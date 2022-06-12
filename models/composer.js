const { Schema, model } = mongoose;

const composerSchema = new Schema({
  composer: { type: String, required: true },

});
const Composer = model("Composer", composerSchema);


module.exports = Composer;