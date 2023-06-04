const Participant = require('../model/Participant');
const formPaticipantView = (req,res)=>{
            res.render('formPaticipant');
}

const formPaticipant = (req,res)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    // const {nom,prenom,telephone,email} = req.body;
    const participant = new Participant({
      ...req.body,
    });
  
    participant.save()
      .then(() => {
        console.log('le Participant est enregister ');
        res.send('Vous avez été enregistrer');
        // res.redirect('/formPaticipant');   
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
}
module.exports ={
    formPaticipantView,
    formPaticipant
}