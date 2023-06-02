const express   = require('express');
const router    = express.Router();

const {listeParticipantView} = require('../controllers/listeParticipant');
const {formPaticipantView,formPaticipant} = require('../controllers/formParticipant');

router.get('/listeParticipant',listeParticipantView);
router.get('/formPaticipant',formPaticipantView);

router.post('/formPaticipant',formPaticipant); 



module.exports = router; 
