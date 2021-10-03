const membre = require('../models/membre')
const membreClass = require('../class/membre')
const connectionsMongoDB = require('./connectionsMongoDB.js')
const mongoose = require("mongoose")
const profile = require("./../models/profile")
const mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'jci'
})
const bureau = require('../models/bureaux')
const payement=require('../models/payement')


mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise

// Ajouter Nouveau Membre

function ajoutmembre(mb = new Membre()) {


  val=[mb.nom,
    
mb.prenom,
  
mb.dnais,
   
mb.numtel,
   
mb.mail,
    
mb.poste,
   
mb.image,
   
mb.dateposte,
mb.motpass
  ]
  db.query("INSERT INTO membres(nom,prenom,dnais,numtel,mail,poste,image,dateposte,motpass) VALUES(?)",[val],(err,data,fields)=>{
if(err) throw err
else
console.log('membre Ajouter')
  })




}


// Affiche Liste Des Membres

afficheListeMembre = async (req, res) => {


  db.query("SELECT * FROM membres",(err,data,fields)=>{
    if(err) throw err
   else
   res.send(data)
  
  })
  



}
exports.getmembre = async (req, res) => {

  

db.query("SELECT * FROM membres WHERE mail=?",[req.params.mail],(err,data,fields)=>{
  if(err) throw err
  if(data.length>0){
    res.send(data[0])
  }

})

}

// get Presesdent


exports.getPresedent = async function (req, res) {

  db.query("SELECT * FROM membres WHERE poste=?",['president'],(err,data,fields)=>{
    if (err) throw err
    if(data.length>0)
    res.send(data[0])

  })




}




//modifier Membre
exports.modifierMembre = async function (m = new Membre) {

 


  
  val=[m.nom,
    
    m.prenom,
      
    m.dnais,
       
    m.numtel,
       
     
    
       
    m.image,
       

    m.motpass,
    m.mail
      ]

db.query("UPDATE membres SET nom=?,prenom=?,dnais=?,numtel=?,image=?,motpass=? WHERE mail=?",val,(err,data,fields)=>{
if(err) throw err

})

}

//modifier Compte
exports.modifierCompte = async function (req, res) {






}



//delete 

exports.deleteMembre = async function (val) {
  
db.query("DELETE FROM membres WHERE mail=?",[val],(err,data,fields)=>{
  if(err) throw err
  else
  res.send('membre supprimee')
})




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
 
val=[req.body.poste,req.body.mail]

  db.query("UPDATE membres SET poste=? WHERE mail=?",val,(err,data,fields)=>{
if(err) throw err
else
res.send("poste membre modifier")
  })



}


// auth




exports.getAuth = async function (m, p) {

  const getdata=q=>{
    return new Promise((resolve,reject)=>{
      db.query("SELECT * FROM membres WHERE mail=? AND motpass=?",[m,p],(err,data)=>{
if(err) reject(err)
console.log(1)
resolve(data)

      })
    })
  }

  
  const z=await getdata()
  if(z.length>0){   console.log(z.length)
    return true
 
  }else{
    return false
  }

}


// ajout un element aux bureaux
exports.ajoutBureau=async function(req,res) {
 

  val=[req.body.nom,req.body.prenom,req.body.description,req.body.mail,req.body.poste,req.body.image]

db.query("INSERT INTO bureauxes(nom,prenom,description,mail,poste,image) VALUES(?)",[val],(err,data,fields)=>{
  if(err) throw err
  else
  res.send('bureux ajouter !')
})


}


// modifier la poste d u bureax
exports.modifierpostbureaux=async function(req,res){

val=[req.body.poste,req.body.id]
db.query("UPDATE bureauxes SET poste=? WHERE id=?",val,(err,data,fields)=>{
  if(err) throw err
  else
  res.send('poste du bureaux modifier')
})




}

exports.supprimerBureauPoste=async function(req,res){



db.query("DELETE FROM bureauxes WHERE id=?",[req.params.id],(err,data,fields)=>{
if(err) throw err
else
res.send('bureaux supprime')
})




}

exports.getBureaux=async function(req,res){

  db.query("SELECT * FROM bureauxes",(err,data,fields)=>{
    if(err) throw err
    else
    res.send(data)
  })


}


// Ajout Payement 

exports.AjoutPayement= async function(req,res){
  
  val=[req.body.nom,req.body.prix,req.body.date]
db.query("INSERT INTO payements(nom,prix,date) VALUES(?)",[val],(err,data,fields)=>{
if(err) throw err
else
res.send("payelment inserer !")
})



}


// Get liste de payement 

exports.getPayement=async function(req,res){

  db.query("SELECT * FROM payements",(err,data,fields)=>{
    if(err) throw err
    else
    res.send(data)
  })
  



}








module.exports.ajoutmembre = ajoutmembre
module.exports.afficheListeMembre = afficheListeMembre