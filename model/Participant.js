const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  nom: {type: String,required: true},
  prenom: {type: String,required: true},
  telephone: {type: String,required: true},
  email: {type: String,required: true},
  date: {type: Date,default: Date.now}
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
