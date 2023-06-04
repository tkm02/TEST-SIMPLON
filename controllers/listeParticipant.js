const Participant = require('../model/Participant');

const listeParticipantView = (req,res)=>{
    Participant.find()
        .then(participants=>{    
            res.render('listeParticipant', { participants }); 
        })
}

module.exports ={
    listeParticipantView,
}