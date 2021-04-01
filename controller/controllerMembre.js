const membre=require('../models/membre')
const membreClass=require('../class/membre')
const connectionsMongoDB=require('./connectionsMongoDB.js')
const mongoose=require("mongoose")
mongoose.Promise=global.Promise

// Ajouter Nouveau Membre

function ajoutmembre(mb=new Membre()){
  connectionsMongoDB.connection()

var m=new membre({
  nom:mb.nom,
  prenom:mb.prenom,
  dnais:mb.dnais,
  numtel:mb.dnais,
  mail:mb.mail,
  poste:mb.poste,
  dateposte:mb.dateposte,
  motpass:mb.motpass
})
m.save().then(function(){
  console.log("membre inserer")
  
})
}


    // Affiche Liste Des Membres

    afficheListeMembre=async(req,res)=>{

      await connectionsMongoDB.connection()
        
          
       
       const arr=await membre.find()
       console.log("liste de membre")
       res.json(arr)
     
     
     
     }
     exports.getmembre=async(req,res)=>{

      await connectionsMongoDB.connection()
        
          
       
       const arr=await membre.findOne({mail:req.params.mail})
       console.log("liste de membre")
       res.json(arr)
     
     
     
     }


//modifier Membre
exports.modifierMembre=async function(m=new Membre){
  
  await connectionsMongoDB.connection()
  var q={"mail":m.mail}
var upd={mail:m.mail,nom:m.nom,prenom:m.prenom,numtel:m.numtel,poste:m.poste,dnais:m.dnais,motpass:m.motpass}
var op={new: true};
var u=await membre.findOneAndUpdate(q,upd,op)
console.log("membre modifier")
}


//delete 

exports.deleteMembre= async function(val){
  await connectionsMongoDB.connection()
await membre.deleteOne({ mail: val });

}


module.exports.ajoutmembre=ajoutmembre
module.exports.afficheListeMembre=afficheListeMembre