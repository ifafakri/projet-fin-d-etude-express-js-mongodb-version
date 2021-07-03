const role=require("./../models/role")
const connectionsMongoDB=require('./connectionsMongoDB.js')
const poste=require("./../models/poste")
const histUser=require('./../models/historiqueUser')
const config=require('./../models/config')
var nodemailer = require('nodemailer');
const contact=require('./../models/contact')
const recrutement = require("../models/recrutement")
const membre = require("../models/membre")
//donner l accee a un poste
exports.ajoutAccesAuPoste=async function(req,res){
    await connectionsMongoDB.connection()
var a= new role({
    poste:req.body.poste,
    formation:{ajout:false,suppression:false,modufication:false},
    membre:{ajout:false,suppression:false,modufication:false},
    projet:{ajout:false,suppression:false,modufication:false},
    page:{modufication:false},
    recrutement:{affichage:false},
    historique:{affichage:false},
    contact:{affichage:false},


})
a.save().then(function(){
console.log("cette poste et ajouter dans les acccee")
res.send("cette poste et ajouter dans les acccee ")
})


}


//modification l acces du formation
exports.ModificationAcceeFormation= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"formation.ajout":req.body.ajout,"formation.suppression":req.body.suppression,"formation.modufication":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au formation modifier :) ')

}

//modification l acces du membre
exports.ModificationAcceeMembre= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"membre.ajout":req.body.ajout,"membre.suppression":req.body.suppression,"membre.modufication":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au membre modifier :) ')

}


//modification l acces du projet
exports.ModificationAcceeProjet= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"projet.ajout":req.body.ajout,"projet.suppression":req.body.suppression,"projet.modufication":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au projer modifier :) ')

}

//modification l acces du page
exports.ModificationAcceePage= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"page.modufication":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au formation modifier :) ')

}


//modification l acces du recrutement
exports.ModificationAcceeRecrutement= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"recrutement.affichage":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au recrutement modifier :) ')

}


//modification l acces du historique
exports.ModificationAcceeHistorique= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"historique.affichage":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au historique modifier :) ')

}


//modification l acces du contact
exports.ModificationAcceeContact= async function(req,res){
    await connectionsMongoDB.connection()
var f={poste:req.body.poste}
var u={$set: {"contact.affichage":req.body.modufication}}
var op={new: true}
    var r=await role.findOneAndUpdate(f,u,op)

res.send('accee au contact modifier :) ')

}
// Creation Poste
exports.CreationPoste= async function(req,res){
    await connectionsMongoDB.connection()
var p=new poste({
    nomPoste:req.body.nomposte
})

p.save().then(function(){
    console.log('poste Ajouter :)')
    res.send('poste Ajouter :)')
})


}

//get toutes les postes
exports.getPostes=async function(req,res){
    await connectionsMongoDB.connection()
var po=await poste.find({})

res.send(po)

}

// recherche l existance d une poste dans la table d accee
exports.recherche=async function(req,res){
    await connectionsMongoDB.connection()
var r= await role.find({poste:req.params.poste})
b:Boolean
if(r.length<1){
    b=false
}else{
    b=true
}
res.send(b)
}

//get l acce d une poste 

exports.getAcceePoste=async function(req,res){
    await connectionsMongoDB.connection()
var result=await role.findOne({poste:req.params.poste})
res.send(result)

}

// Ajout Historique 
exports.AjoutHistoriqueUser=async function(req,res){
    await connectionsMongoDB.connection()

var h=new histUser({
    nom:req.body.nom,
prenom:req.body.prenom,
action:req.body.action,
description:req.body.description,
date:req.body.date
})
await h.save().then(function(){
     res.send("historique et ajouter :)")
})
 

}
exports.SuppressionHistoriqueUser=async function(req,res){
    await connectionsMongoDB.connection()
var h=await histUser.findByIdAndDelete(req.params.id)
res.send('Historique supprimer ;]')
console.log(req.params.id)
}
exports.getHistoriqueUser=async function(req,res){
    await connectionsMongoDB.connection()

    var h= await histUser.find({})
res.send(h)


}
//initializer config
exports.InitializerConfig=async function(req,res){
    await connectionsMongoDB.connection()

var r=await config.find()

if(r.length===0){
    const c=new config({
        email:'email@email.com',
pass:'password',
recrutement:{dateD:'1-5-2005',dateF:'1-5-206'}

    })
await c.save()
res.send('config initializer !')
}else{

var update =await config.findByIdAndUpdate("6081b2bc331e4f2aeca6ba9b",{email:req.body.mail,pass:req.body.pass},{new:true})
res.send('email modifier !')

}

}



// send mail
exports.sendMail=async function(req,res){
    await connectionsMongoDB.connection()
var c=await config.findOne(({_id:"6081b2bc331e4f2aeca6ba9b"}))

var email=c.email
var pass=c.pass


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
  });
  var mailOptions = {
    from: email,
    to: req.body.mail,
    subject: req.body.sujet,
    text: req.body.text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

var rec=await recrutement.findOneAndUpdate({mail:req.body.mail},{reponce:true},{new:true})




}

//sendmailcontact


exports.sendMailContact=async function(req,res){
    await connectionsMongoDB.connection()
var c=await config.findOne(({_id:"6081b2bc331e4f2aeca6ba9b"}))

var email=c.email
var pass=c.pass
res.send(pass)

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
  });
  var mailOptions = {
    from: email,
    to: req.body.mail,
    subject: req.body.sujet,
    text: req.body.text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

var rec=await contact.findOneAndUpdate({email:req.body.mail},{repond:true},{new:true})




}


//  get mot de passe 

exports.getMotdepass=async function(req,res){
    await connectionsMongoDB.connection()

    var m=await membre.findOne({mail:req.params.mail})
if(m==null){
    res.json({e:false})
}else{

    var c=await config.findOne(({_id:"6081b2bc331e4f2aeca6ba9b"}))

    var email=c.email
    var pass=c.pass

    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: email,
          pass: pass
        }
      });
      var mailOptions = {
        from: email,
        to: req.params.mail,
        subject: 'mot de passe ',
        text: 'mot de passe = '+m.motpass
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

res.json({e:true})
}


}






exports.configrecrut=async function(req,res){
   

    await connectionsMongoDB.connection()
    var r=await config.find({})

if(r.length===0){
    await connectionsMongoDB.connection()
    const c=new config({
        email:'email@email.com',
pass:'password',
recrutement:{dateD:'1-5-2005',dateF:'1-5-206'}

    })
await c.save()
res.send('config initializer !')



    }else{    await connectionsMongoDB.connection()

        var r={$set:{"recrutement.dateD":req.body.dated,"recrutement.dateF":req.body.datef}}

var op={new:true}
var u=await config.findByIdAndUpdate("6081b2bc331e4f2aeca6ba9b",r,op)

res.send('temps de recrutement modifier :|')

    }




}

exports.getConfig=async function(req,res){
    await connectionsMongoDB.connection()
var c=await config.find({})
res.send(c)
}
