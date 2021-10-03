const role=require("./../models/role")
const connectionsMongoDB=require('./connectionsMongoDB.js')
const poste=require("./../models/poste")
const histUser=require('./../models/historiqueUser')
const mysql=require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'jci'
})
const config=require('./../models/config')
var nodemailer = require('nodemailer');
const contact=require('./../models/contact')
const recrutement = require("../models/recrutement")
const membre = require("../models/membre")
//donner l accee a un poste
exports.ajoutAccesAuPoste=async function(req,res){
  /*  await connectionsMongoDB.connection()
var a= new role({
    poste:,
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


})
*/
val=[req.body.poste,'false','false','false','false','false','false','false','false','false','false','false','false','false']
db.query("INSERT INTO role VALUES(?)",[val],(err,data)=>{
    if(err) throw err
    else
   console.log('poste initialaizer !')
})
res.send("cette poste et ajouter dans les acccee ")



}
initializeRole=(poste)=>{
    val=[poste,'false','false','false','false','false','false','false','false','false','false','false','false','false']
    db.query("INSERT INTO role VALUES(?)",[val],(err,data)=>{
        if(err) throw err
        else
       console.log('poste initialaizer !')
    })
    
    
    
        }
    
// recherche l existance d une poste dans la table d accee
exports.recherche=async function(req,res){
   
db.query("SELECT * FROM role WHERE poste=?",[req.params.poste],(err,data)=>{
    if(err) throw err
    if(data.length>0){
        
        res.send(true)
    }else{initializeRole(req.params.poste)
        res.send(true)
    }
})





}

//modification l acces du formation
exports.ModificationAcceeFormation= async function(req,res){
console.log(req.body)
val=[req.body.ajout,req.body.suppression,req.body.modufication,req.body.poste]
db.query("UPDATE role SET fa=?,fs=?,fm=? WHERE poste=?",val,(err,data)=>{
    if(err) throw err
    else
    res.send('ModificationAcceeFormation !')
})



}

//modification l acces du membre
exports.ModificationAcceeMembre= async function(req,res){
    val=[req.body.ajout,req.body.suppression,req.body.modufication,req.body.poste]
    db.query("UPDATE role SET ma=?,ms=?,mm=? WHERE poste=?",val,(err,data)=>{
        if(err) throw err
        else
        res.send('ModificationAcceeMembre !')
    })

}


//modification l acces du projet
exports.ModificationAcceeProjet= async function(req,res){
    val=[req.body.ajout,req.body.suppression,req.body.modufication,req.body.poste]
    db.query("UPDATE role SET pa=?,ps=?,pm=? WHERE poste=?",val,(err,data)=>{
        if(err) throw err
        else
        res.send('ModificationAcceeProjet !')
    })

}

//modification l acces du page
exports.ModificationAcceePage= async function(req,res){
 
val=[req.body.modufication,req.body.poste]
db.query("UPDATE role SET pagem=? WHERE poste=?",val,(err,data)=>{
    if(err) throw err
    else
    res.send('ModificationAcceePage !')
})



}


//modification l acces du recrutement
exports.ModificationAcceeRecrutement= async function(req,res){
    val=[req.body.modufication,req.body.poste]
    db.query("UPDATE role SET rm=? WHERE poste=?",val,(err,data)=>{
        if(err) throw err
        else
        res.send('ModificationAcceeRecrutement !')
    })

}


//modification l acces du historique
exports.ModificationAcceeHistorique= async function(req,res){
     val=[req.body.modufication,req.body.poste]
    db.query("UPDATE role SET hm=? WHERE poste=?",val,(err,data)=>{
        if(err) throw err
        else
        res.send('ModificationAcceeHistorique !')
    })

}


//modification l acces du contact
exports.ModificationAcceeContact= async function(req,res){
    val=[req.body.modufication,req.body.poste]
    db.query("UPDATE role SET cm=? WHERE poste=?",val,(err,data)=>{
        if(err) throw err
        else
        res.send('ModificationAcceeHistorique !')
    })

}
// Creation Poste
exports.CreationPoste= async function(req,res){
 
db.query("INSERT INTO postes(nomPoste) VALUES(?)",[req.body.nomposte],(err,data,fields)=>{
if(err) throw err
else
res.send("poste Ajouter !")
})



}

//get toutes les postes
exports.getPostes=async function(req,res){
    db.query("SELECT * FROM postes",(err,data,fields)=>{
        if(err) throw err
        else
        res.send(data)
    })

}


//get l acce d une poste 

function getBool(val){
    if(val==="true" || val==="1"){
        return true
    }else{
        return false
    }
}



exports.getAcceePoste=async function(req,res){
   

db.query("SELECT * FROM role WHERE poste=?",[req.params.poste],(err,data)=>{
    if(err) throw err
    if(data.length>0){
      const  h={ poste:data[0].poste,
            formation:{ajout:getBool(data[0].fa),suppression:getBool(data[0].fs),modufication:getBool(data[0].fm)},
            membre:{ajout:getBool(data[0].ma),suppression:getBool(data[0].ms),modufication:getBool(data[0].mm)},
            projet:{ajout:getBool(data[0].pa),suppression:getBool(data[0].ps),modufication:getBool(data[0].pm)},
            page:{modufication:getBool(data[0].pagem)},
            recrutement:{affichage:getBool(data[0].rm)},
            historique:{affichage:getBool(data[0].hm)},
            contact:{affichage:getBool(data[0].cm)}
        }
        res.send(h)
        }
    
})




}

// Ajout Historique 
exports.AjoutHistoriqueUser=async function(req,res){

val=[req.body.nom,req.body.prenom,req.body.action,req.body.description,req.body.date]

db.query("INSERT INTO historiqueusers(nom,prenom,action,description,date) VALUES(?)",[val],(err,data)=>{
    if(err) throw err
    else
    res.send('historique Ajouter')
})




 

}
exports.SuppressionHistoriqueUser=async function(req,res){
  
    console.log(req.params.id)

db.query("DELETE FROM historiqueusers WHERE id=?",[req.params.id],(err,data)=>{
    if(err)throw err
    else
    console.log('historique supprimer !')
})



}
exports.getHistoriqueUser=async function(req,res){
    
    db.query("SELECT * FROM historiqueusers",(err,data)=>{
        if(err) throw err
        else
        res.send(data)
    })


}
//initializer config
exports.InitializerConfig=async function(req,res){
  /*  await connectionsMongoDB.connection()

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
*/


db.query("SELECT * FROM configs",(err,data)=>{
    if(data.length==0)
   {
       val=['email','0000','2020-05-2','2020-2-20']
       db.query("INSERT INTO configs(email,pass,dateD,dateF) VALUES(?)",[val],(err,data)=>{
           if(err) throw err
           else
           res.send('config initializer !')
       })
   }
    else
  {val=[req.body.mail,req.body.pass]
      db.query("UPDATE configs SET email=?,pass=?",val,(err,data)=>{
          if(err) throw err
          else
          res.send('configs update')
      })
  }
})



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
   

    db.query("SELECT * FROM configs",(err,data)=>{
        if(data.length==0)
       {
           val=['email','0000','2020-05-2','2020-2-20']
           db.query("INSERT INTO configs(email,pass,dateD,dateF) VALUES(?)",[val],(err,data)=>{
               if(err) throw err
               else
               res.send('config initializer !')
           })
       }
        
        val=[req.body.dated,req.body.datef]
        db.query("UPDATE configs SET dateD=?,dateF=?",val,(err,data)=>{
if(err)throw err
else
res.send('recrutement modifiier')
        })

    

    })


}

exports.getConfig=async function(req,res){
   
    
    db.query('SELECT * FROM configs',(err,data)=>{
        if(err) throw err

        if(data.length>0){
            res.send({

                email:data[0].email,
              pass:data[0].pass,
              recrutement:{dateD:data[0].dateD,dateF:data[0].dateF}
              
              })
        }
    })


    initializeRole=(poste)=>{
val=[poste,'','','','','','','','','','','','','']
db.query("INSERT INTO role VALUES(?)",[val],(err,data)=>{
    if(err) throw err
    else
   console.log('poste initialaizer !')
})



    }




}
