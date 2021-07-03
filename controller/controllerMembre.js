const membre = require('../models/membre')
const membreClass = require('../class/membre')
const connectionsMongoDB = require('./connectionsMongoDB.js')
const mongoose = require("mongoose")
const profile = require("./../models/profile")

const bureau = require('../models/bureaux')
const payement=require('../models/payement')


mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise

// Ajouter Nouveau Membre

function ajoutmembre(mb = new Membre()) {
  connectionsMongoDB.connection()

  var m = new membre({
    nom: mb.nom,
    prenom: mb.prenom,
    dnais: mb.dnais,
    numtel: mb.dnais,
    mail: mb.mail,
    poste: mb.poste,
    image: mb.image,
    dateposte: mb.dateposte,
    motpass: mb.motpass
  })
  m.save().then(function () {
    console.log("membre inserer")

  })
}


// Affiche Liste Des Membres

afficheListeMembre = async (req, res) => {

  await connectionsMongoDB.connection()



  const arr = await membre.find({})
  console.log("liste de membre")
  res.json(arr)



}
exports.getmembre = async (req, res) => {

  await connectionsMongoDB.connection()



  const arr = await membre.findOne({ mail: req.params.mail })
  console.log("liste de membre")
  res.json(arr)



}

// get Presesdent


exports.getPresedent = async function (req, res) {
  await connectionsMongoDB.connection()

  const memb = await membre.findOne({ "poste": "president" })

  res.send(memb)

}




//modifier Membre
exports.modifierMembre = async function (m = new Membre) {

  await connectionsMongoDB.connection()
  var q = { "mail": m.mail }
  var upd = { mail: m.mail, nom: m.nom, prenom: m.prenom, numtel: m.numtel, poste: m.poste, image: m.image, dnais: m.dnais, motpass: m.motpass }
  var op = { new: true };
  var u = await membre.findOneAndUpdate(q, upd, op)
  console.log("membre modifier")
}

//modifier Compte
exports.modifierCompte = async function (req, res) {

  await connectionsMongoDB.connection()
  var q = { "mail": req.body.mail }
  var upd = { mail: req.body.mail, nom: req.body.nom, prenom: req.body.prenom, numtel: req.body.numtel, image: req.body.image, dnais: req.body.dnais, motpass: req.body.motpass }
  var op = { new: true };
  var u = await membre.findOneAndUpdate(q, upd, op)
  console.log("membre modifier")
}



//delete 

exports.deleteMembre = async function (val) {
  await connectionsMongoDB.connection()
  await membre.deleteOne({ mail: val });

}


// modifier profile


exports.modifProfile = async function (req, res) {
  await connectionsMongoDB.connection()
  var p = await profile.find({ mail: req.body.mail })



  if (p.length === 0) {
    var pr = new profile({
      about: '',
      youtube: '',
      twiter: '',
      linkedin: '',
      facebook: '',
      gmail: '',
      mail: req.body.mail,
      affiche: false


    })


    var s = await pr.save()

  } else {
    var q = { "mail": req.body.mail }
    var upd = { about: req.body.about, youtube: req.body.youtube, twiter: req.body.twiter, linkedin: req.body.linkedin, instagram: req.body.instagram, facebook: req.body.facebook, gmail: req.body.gmail, affiche: req.body.affiche }
    var op = { new: true };
    var u = await profile.findOneAndUpdate(q, upd, op)




  }


  res.send('see the console')



}


// get profile

exports.getProfile = async function (req, res) {
  await connectionsMongoDB.connection()

  var p = await profile.findOne({ mail: req.params.mail })

  res.json(p)

}

// modifier la poste du membre



exports.modifierPosteMembre = async function (req, res) {
  await connectionsMongoDB.connection()

  const q = { poste: req.body.poste }
  const c = { mail: req.body.mail }
  const o = { new: true }
  const up = await membre.findOneAndUpdate(c, q, o)
  res.send('poste modifier ')


}


// auth

exports.getAuth = async function (m, p) {
  await connectionsMongoDB.connection()

  const mb = await membre.findOne({ mail: m, motpass: p }).then()

  if (mb === null) {
    return false
  } else {
    return true
  }





}


// ajout un element aux bureaux
exports.ajoutBureau=async function(req,res) {
  connectionsMongoDB.connection()

  var m = new bureau({
    nom:req.body.nom,
    prenom:req.body.prenom,
 
   description:req.body.description,
      mail:req.body.mail,
      poste:req.body.poste,
      image:req.body.image,
  })
  m.save().then(function () {
    res.send("bureaux  inserer")

  })
}


// modifier la poste d u bureax
exports.modifierpostbureaux=async function(req,res){
  connectionsMongoDB.connection()

  const upd={poste:req.body.poste}
const c={_id:req.body.id}
const o={new:true}


const re=await bureau.findOneAndUpdate(c,upd,o)

res.send('poste modifier')

}

exports.supprimerBureauPoste=async function(req,res){

 connectionsMongoDB.connection()



 var s=await bureau.findByIdAndDelete(req.params.id)

res.send("bureaux supprimer")

}

exports.getBureaux=async function(req,res){
  connectionsMongoDB.connection()

  var g=await bureau.find({})
  res.json(g)



}


// Ajout Payement 

exports.AjoutPayement= async function(req,res){
  connectionsMongoDB.connection()

  var payment =new payement({

    nom:req.body.nom,
    prix:req.body.prix,
    date:req.body.date
    
  })


  payment.save()
  res.send('payement Ajouter')





}


// Get liste de payement 

exports.getPayement=async function(req,res){
  connectionsMongoDB.connection()
var pay=await payement.find()
res.json(pay)


}








module.exports.ajoutmembre = ajoutmembre
module.exports.afficheListeMembre = afficheListeMembre