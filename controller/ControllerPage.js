const page=require('./../models/page')
const connectionsMongoDB=require('./connectionsMongoDB.js')
const partenair=require('./../models/partenaire')
const media =require('./../models/media')
const projet=require('./../models/projet')
const formation=require('./../models/formation')
const recrutement=require('./../models/recrutement')
const contact=require('./../models/contact')
const commantair=require('./../models/commantaire')
const presentation=require('./../models/presentation')
const developpement=require('./../models/developpement')
const inscrir=require('./../models/inscrir')
const home=require('./../models/home')
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
/*
exports.modifierHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"vision"}
    var upd={$set:{"home.0.description":req.body.description,"home.0.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}

exports.modifierCredoHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"credo"}
    var upd={$set:{"home.1.description":req.body.description,"home.1.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}
*/

//modifier vision home


exports.modifierVisionHome=async function(req,res){
    await connectionsMongoDB.connection()

    const r= await home.find({})

    if(r.length===0){
        await connectionsMongoDB.connection()
var h=new home({
    vision:{titre:'',description:''},
mission:{titre:'',description:''},
presentation:{titre:'',description:'',image:''},
credo:{titre:'',description:''},

})

h.save()
res.send('home initializer')

    }else{
        await connectionsMongoDB.connection()
        var upd={$set:{"vision.titre":req.body.titre,"vision.description":req.body.description}}
        var op={new: true};
var u=await home.findOneAndUpdate({},upd,op)

        res.send('vision modifier')

    }
    



}



exports.modifiermissionHome=async function(req,res){
    await connectionsMongoDB.connection()

    const r= await home.find({})

    if(r.length===0){
        await connectionsMongoDB.connection()
var h=new home({
    vision:{titre:'',description:''},
mission:{titre:'',description:''},
presentation:{titre:'',description:'',image:''},
credo:{titre:'',description:''},

})

h.save()
res.send('home initializer')

    }else{
        await connectionsMongoDB.connection()
        var upd={$set:{"mission.titre":req.body.titre,"mission.description":req.body.description}}
        var op={new: true};
var u=await home.findOneAndUpdate({},upd,op)

        res.send('mission modifier')

    }
    



}

exports.modifieCredoHome=async function(req,res){
    await connectionsMongoDB.connection()

    const r= await home.find({})

    if(r.length===0){
        await connectionsMongoDB.connection()
var h=new home({
    vision:{titre:'',description:''},
mission:{titre:'',description:''},
presentation:{titre:'',description:'',image:''},
credo:{titre:'',description:''},

})

h.save()
res.send('home initializer')

    }else{
        await connectionsMongoDB.connection()
        var upd={$set:{"credo.titre":req.body.titre,"credo.description":req.body.description}}
        var op={new: true};
var u=await home.findOneAndUpdate({},upd,op)

        res.send('credo modifier')

    }
    



}


exports.modifiePresentationHome=async function(req,res){
    await connectionsMongoDB.connection()

    const r= await home.find({})

    if(r.length===0){
        await connectionsMongoDB.connection()
var h=new home({
    vision:{titre:'',description:''},
mission:{titre:'',description:''},
presentation:{titre:'',description:'',image:''},
credo:{titre:'',description:''},

})

h.save()
res.send('home initializer')

    }else{
        await connectionsMongoDB.connection()
        var upd={$set:{"presentation.titre":req.body.titre,"presentation.description":req.body.description,"presentation.image":req.body.image}}
        var op={new: true};
var u=await home.findOneAndUpdate({},upd,op)

        res.send('presentation modifier')

    }
    



}
// get Home

exports.getHome=async function(req,res){
    await connectionsMongoDB.connection()
var h=await home.find()

res.json(h)

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
   
    var q={"adhesion._id":"604e125013c6473b10724556"}
    var upd={$set:{"adhesion.0.titre":req.body.titre,"adhesion.0.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
    console.log('vision modifier')
    
    
}
//MODIFIER ADHESION ELM2
exports.modifierAdhesionElm2=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"adhesion._id":"604e125013c6473b10724557"}
    var upd={$set:{"adhesion.1.titre":req.body.titre,"adhesion.1.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER ADHESION ELM3
exports.modifierAdhesionElm3=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"adhesion._id":"604e125013c6473b10724558"}
    var upd={$set:{"adhesion.2.titre":req.body.titre,"adhesion.2.description":req.body.description}}
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
   
    var q={"presentation._id":"604e125013c6473b1072455a"}
    var upd={$set:{"presentation.1.titre":req.body.titre,"presentation.1.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER PRESENTATIOn MISION

exports.modifierPresentationVision=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation._id":"604e125013c6473b1072455b"}
    var upd={$set:{"presentation.2.titre":req.body.titre,"presentation.2.description":req.body.description}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
 
}
//MODIFIER PRESENTATIOn Credo

exports.modifierPresentationCredo=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"presentation._id":"604e125013c6473b1072455c"}
    var upd={$set:{"presentation.3.titre":req.body.titre,"presentation.3.description":req.body.description}}
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
    res.json(p)
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

//PROJET 

//Creation PROJET 

exports.creationProjet= async function(req,res){
    await connectionsMongoDB.connection()
    var p=new projet({titre:req.body.titre,text:req.body.text,image:req.body.image,dat:req.body.dat,formateur:req.body.formateur})
p.save().then(function(){
    console.log('projet ajouter ')
})
res.send('projet ajouter')


}
//get un projet
exports.GetUnProjet=async function(req,res){
    await connectionsMongoDB.connection()
var p= await projet.findById(req.params.id)
res.json(p)

}
// get liste des  Projets
exports.getlistprojet=async function(req,res){
    await connectionsMongoDB.connection()
var p= await projet.find({})
res.json(p)

}
//modification projet
exports.moduficationProjet=async function(req,res){
    await connectionsMongoDB.connection()
var p=await projet.findOneAndUpdate({_id:req.body.id},{titre:req.body.titre,text:req.body.text,image:req.body.image},{new:true})
res.send('projet modifier :°')

}
//suppresion PROJET
exports.SuppressionProjet=async function(req,res){
    await connectionsMongoDB.connection()
    var d=await projet.findByIdAndDelete(req.params.id)
res.send('le projet est supprimer :~) ')
}


//formations

//Creation PROJET 

exports.creationformation= async function(req,res){
    await connectionsMongoDB.connection()
    var f=new formation({titre:req.body.titre,text:req.body.text,image:req.body.image,dat:req.body.dat,formateur:req.body.formateur,inscrir:false,liens:req.body.liens})
f.save().then(function(){
    console.log('formation ajouter ')
})
res.send('projet ajouter')


}
//get un projet
exports.GetUneFormation=async function(req,res){
    await connectionsMongoDB.connection()
var p= await formation.findById(req.params.id)
res.json(p)

}
// get liste des  Projets
exports.getlistFormation=async function(req,res){
    await connectionsMongoDB.connection()
var p= await formation.find({})
res.json(p)

}
//modification formation
exports.moduficationFormation=async function(req,res){
    await connectionsMongoDB.connection()
var p=await formation.findOneAndUpdate({_id:req.body.id},{titre:req.body.titre,text:req.body.text,image:req.body.image,dat:req.body.dat,formateur:req.body.formateur,liens:req.body.liens},{new:true})
res.send('formation modifier :°')

}
//suppresion formation
exports.SuppressionFormation=async function(req,res){
    await connectionsMongoDB.connection()
    var d=await formation.findByIdAndDelete(req.params.id)
res.send('le formation est supprimer :~) ')
}

//Ajout recrutement
exports.Creationrecrutement=async function(req,res){
    await connectionsMongoDB.connection()
    var r=new recrutement({
        nom:req.body.nom,
     prenom:req.body.prenom,
   datenais:req.body.datenais,
       mail:req.body.mail,
  telephone:req.body.telephone,
    message:req.body.message,
    reponce:false
    })

r.save()

}
//listeRecrutement
exports.getRecrutement=async function(req,res){
    await connectionsMongoDB.connection()
var p= await recrutement.find({})
res.json(p)

}

//get un recrutement

exports.getUnRecrutement= async function(req,res){
    await connectionsMongoDB.connection()
    var r= await recrutement.findById(req.params.id)
res.json(r)
}

//supprimer recrutement

exports.supprimerRecrutement=async function(req,res){
    await connectionsMongoDB.connection()
var r=await recrutement.findByIdAndDelete(req.params.id)
res.send('recrutement supprimer ')

}





// AJOUT CONTACT

exports.AjoutContact=async function(req,res){
    await connectionsMongoDB.connection()
var c=new contact({
    nom:req.body.nom,
email:req.body.email,
sujet:req.body.sujet,
message:req.body.message,
repond:false
})

var a=await c.save()
       res.send('contact Ajouter :@')
}

//get All Contact

exports.getAllContact= async function(req,res){
    
    await connectionsMongoDB.connection()
var c=await contact.find({})

res.send(c)
}


//  Commantaire


// Ajou commantair 
exports.AjoutCommantaire=async function(req,res){
      
    await connectionsMongoDB.connection()

var com=new commantair({
    idAction:req.body.idAction,
    comantaire:req.body.comantaire,
    nom:req.body.nom,
email:req.body.email
,
siteweb:req.body.siteweb
})

com.save()
res.send('commantaire ajouter ')


}

//supprimer commantaire 

exports.SupprimerCommantair=async function(req,res){
    await connectionsMongoDB.connection()
    const s=await commantair.findOneAndDelete({_id:req.params.id})
    res.send('commantaire supprimer')
}

// get les commantaires d un Action

exports.getCommantair=async function(req,res){
    await connectionsMongoDB.connection()
    const c=await commantair.find({idAction:req.params.id})

res.json(c)

}

exports.ModifierPresentation2=async function(req,res){

    await connectionsMongoDB.connection()
    var c=await presentation.find({})
var x=(c.length)

if(x===0){
    await connectionsMongoDB.connection()
var pre=new presentation({
    id:0,
titre:'',
description:'',
video:''

})

var p=await pre.save()

res.send('initializer')


}else{
    await connectionsMongoDB.connection()
const q={titre:req.body.titre,description:req.body.description,video:req.body.video}
const c={id:0}
const o={new:true}
 const u=await presentation.findOneAndUpdate(c,q,o)

 res.send('presentation modifier ')


}

}


exports.getPresentation2=async function(req,res){
    await connectionsMongoDB.connection()
const pres=await presentation.findOne({id:0})
res.json(pres)


}



// developpement


//   Ajout developpement
exports.AjoutDeveloppement=async function(req,res){
    await connectionsMongoDB.connection()

const d=new developpement({


    titre:req.body.titre,
icon:req.body.icon,
text:req.body.text

})



d.save()

res.send('element ajouter')


}

//get developpement

exports.getDeveloppement=async function(req,res){
    await connectionsMongoDB.connection()


    var dev=await developpement.findById(req.params.id)
res.json(dev)


}

// get tout les developpement


exports.getlistDeveloppement=async function(req,res){
    await connectionsMongoDB.connection()
var l=await developpement.find({})

res.json(l)

}
// supprimer un developpement


exports.SupprimDeveloppement=async function(req,res){

    await connectionsMongoDB.connection()


var s=await  developpement.findByIdAndDelete(req.params.id)

res.send("element supprimer")
}

// modifier developpement 


exports.ModifierDeveloppement=async function(req,res){
    await connectionsMongoDB.connection()

const q={titre:req.body.titre,icon:req.body.icon,text:req.body.text}
const c={_id:req.body.id}
const o={new:true}

const up=await developpement.findOneAndUpdate(c,q,o)

res.send('element modifier')
}


//supprimer contact 


exports.supprimerContact= async function(req,res){
    await connectionsMongoDB.connection()

const c=await contact.findByIdAndDelete(req.params.id)

res.send('contact supprimer')

}


//inscrir

exports.AjoutInscrir=async function(req,res){
    await connectionsMongoDB.connection()



    var insc=new inscrir(
        {
                  nom:req.body.nom,
                   dat:req.body.dat,
            adresemail:req.body.adresemail,
       
              telepone:req.body.telepone,
                lienfb:req.body.lienfb,
            profission:req.body.profission,
            domaine:req.body.domaine,
            competance:req.body.competance,
            idform:req.body.idform,
            parrain:req.body.parrain,
            actif:req.body.actif,
            association:req.body.association,
            deplacement:req.body.deplacement,
            objectif:req.body.objectif
        }
    )


    const ins= insc.save()
res.send("inscrir Ajouter")


}


exports.getInscrir=async function(req,res){

    await connectionsMongoDB.connection()

var insc=await inscrir.find({idform:req.params.idform})

res.json(insc)

}

exports.modifFormationInscrir=async function(req,res){
    
    await connectionsMongoDB.connection()

 const u={_id:req.body.id}
const q={inscrir:req.body.inscrir}
const op={new:true}
const upd=await formation.findOneAndUpdate(u,q,op)
res.send('formation modifier')
}



module.exports.ajoutpages=ajoutpages