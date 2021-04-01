const page=require('./../models/page')
const connectionsMongoDB=require('./connectionsMongoDB.js')
const partenair=require('./../models/partenaire')
const media =require('./../models/media')
function ajoutpages(){
    connectionsMongoDB.connection()
var p=new page({
    home:[{titre:'vision',description:'rrrr',image:'fgg'},{titre:'credo',description:'ggh',image:'fgg'}],
    historique:[{titre:'partie1',description:'  o',image:'rfg'},{titre:'partie2',description:'ttt',image:'fff'}],
    adhesion:[{titre:'elm1',description:'yyyy'},{titre:'elm2',description:'yyyy'},{titre:'elm3',description:'yyyy'}],
    presentation:[{titre:'presentationgeneral',description:'pppppp',image:'ppppp'},{titre:'mission',description:'ppppp',image:' iiiii'},{titre:'vision',description:'ffff',image:'rrrrrr'},{titre:'credo',description:'rrrrr',image:'jjjjjj'}]

})
p.save().then(function(){
    console.log('pages')
})


}

exports.listePage=async function(req,res,next){
    await connectionsMongoDB.connection()
    const arr=await page.find()
    res.json(arr)
}
//MODIFIER vision Home
exports.modifierHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"vision"}
    var upd={$set:{"home.0.description":req.body.description,"home.0.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}
//MODIFIER credo home
exports.modifierCredoHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"credo"}
    var upd={$set:{"home.1.description":req.body.description,"home.1.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}

//MODIFIER HISTORIQUE PARTIE 1
exports.modifierHistoriqueP1=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"historique.titre":"partie1"}
    var upd={$set:{"historique.0.description":req.body.description,"historique.0.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}
//MODIFIER HISTORIQUE PARTIE 2
exports.modifierHistoriqueP2=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"historique.titre":"partie2"}
    var upd={$set:{"historique.1.description":req.body.description,"historique.1.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}
//MODIFIER ADHESION ELM1
exports.modifierAdhesionElm1=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"adhesion.titre":"elm1"}
    var upd={$set:{"adhesion.0.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
    console.log('vision modifier')
    
    
}
//MODIFIER ADHESION ELM2
exports.modifierAdhesionElm2=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"adhesion.titre":"elm2"}
    var upd={$set:{"adhesion.1.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER ADHESION ELM3
exports.modifierAdhesionElm3=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"adhesion.titre":"elm3"}
    var upd={$set:{"adhesion.2.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}

//MODIFIER PRESENTATIONgENERAL

exports.modifierPresentationGen=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation.titre":"presentationgeneral"}
    var upd={$set:{"presentation.0.description":req.body.description,"presentation.0.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER PRESENTATIOn MISION

exports.modifierPresentationMission=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation.titre":"mission"}
    var upd={$set:{"presentation.1.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER PRESENTATIOn MISION

exports.modifierPresentationVision=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation.titre":"vision"}
    var upd={$set:{"presentation.2.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER PRESENTATIOn Credo

exports.modifierPresentationCredo=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation.titre":"credo"}
    var upd={$set:{"presentation.3.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//Ajouter partenair
exports.AjouterPartenaire=async function(req,res,next){
    await connectionsMongoDB.connection()
  var   p=new partenair({image:req.body.image})
p.save().then(function(){
    console.log('partenaire ajouter')
})
}

//get Partenaire 

exports.getPartenaire=async function(req,res,next){
    await connectionsMongoDB.connection()
   const p= await partenair.find({})
    res.send(p)
}

//supprimer partenair
exports.DeletePartenaire=async function(req,res){
    await connectionsMongoDB.connection()
var d=await partenair.findOneAndDelete({_id:req.params.id})
res.send("partenair supprimer ")

}

// creation media
exports.creationMedia= async function(req,res){
    await connectionsMongoDB.connection()

    var m=new media({titre:req.body.titre,description:req.body.description,image:req.body.image,video:req.body.video})
    m.save().then(function(){
        console.log('media ajouter')

    })
    res.send('media ajouter')
}
//modification media 

exports.modifierMedia=async function(req,res){
    await connectionsMongoDB.connection()
var q={_id:req.body.id}
var upd={titre:req.body.titre,description:req.body.description,image:req.body.image,video:req.body.video}
var op={new:true}
var u=await media.findOneAndUpdate(q,upd,op)
res.send('element modifier')
}
// get media
exports.getMedia=async function(req,res){
    await connectionsMongoDB.connection()
var m=await media.find({})
res.json(m)

}
//supprision media 

exports.suppresionmedia=async function(req,res){
    await connectionsMongoDB.connection()
    var q=await media.findOneAndDelete({_id:req.params.id})

    res.json(req.body.id)
}



module.exports.ajoutpages=ajoutpages