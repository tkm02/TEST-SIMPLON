const mongoose = require('mongoose');

// Définition du schéma du participant
const participantSchema = new mongoose.Schema({
  nom: {type: String,required: true},
  prenom: {type: String,required: true},
  telephone: {type: String,required: true},
  email: {type: String,required: true},
  date: {type: Date,default: Date.now}
});

// Création du modèle Participant à partir du schéma
const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
