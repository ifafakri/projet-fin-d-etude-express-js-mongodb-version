require('dotenv').config()
const express=require('express')



const jwt=require('jsonwebtoken')





const router=express.Router()
const controllerMembre=require('./controller/controllerMembre')
const Membre=require('./class/membre')
const controllerPage=require('./controller/ControllerPage')
const multer=require('multer')
const controllerAcee =require('./controller/controllerAccee')
router.get('/membre', controllerMembre.afficheListeMembre)

router.get('/membre/:mail',controllerMembre.getmembre)

//get presedent
router.get('/president',controllerMembre.getPresedent)
router.post('/membre', function(req,res,next){
var  mb=new Membre(req.body.nom,req.body.prenom,req.body.dnais,req.body.numtel,req.body.mail,req.body.post,req.body.image,req.body.dateposte,req.body.motpass)

  controllerMembre.ajoutmembre(mb)
res.json(req.body.nom)

})

router.delete('/membre/:mail',function(req,res,next){
  controllerMembre.deleteMembre(req.params.mail)
  
  res.json(req.params.mail)
  
})
router.put('/membre',function(req,res,next){
var mb=new Membre(req.body.nom,req.body.prenom,req.body.dnais,req.body.numtel,req.body.mail,req.body.poste,req.body.image,req.body.motpass)
controllerMembre.modifierMembre(mb)
console.log(mb)
res.json(req.body.nom)
})

//modifier la poste du membre

router.put('/modifpost',controllerMembre.modifierPosteMembre)





router.put('/compte',controllerMembre.modifierCompte)



//initialiser les pages
router.post('/pages',controllerPage.ajoutpages)
router.get('/pages',controllerPage.listePage)





const dstorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./images")
    
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+"--"+file.originalname);
  }
})
const upload=multer({storage:dstorage})



router.put('/historiqueP1',controllerPage.modifierHistoriqueP1)
router.put('/historiqueP2',controllerPage.modifierHistoriqueP2)
router.put('/adhesionElm1',controllerPage.modifierAdhesionElm1)
router.put('/adhesionElm2',controllerPage.modifierAdhesionElm2)
router.put('/adhesionElm3',controllerPage.modifierAdhesionElm3)
router.put('/presentationGeneral',controllerPage.modifierPresentationGen)
router.put('/presentationMission',controllerPage.modifierPresentationMission)
router.put('/presentationVision',controllerPage.modifierPresentationVision)
router.put('/presentationCredo',controllerPage.modifierPresentationCredo)




router.post('/partenair',controllerPage.AjouterPartenaire)
router.get('/partenair',controllerPage.getPartenaire)
router.delete('/partenair/:id',controllerPage.DeletePartenaire)

//creation media
router.post('/media',controllerPage.creationMedia)
//modifier media
router.put('/media',controllerPage.modifierMedia)
//get media

router.get('/media',controllerPage.getMedia)
//suppresion media ....
router.delete('/media/:id',controllerPage.suppresionmedia)
//Formation
router.get('/formation/:id',controllerPage.GetUneFormation)
router.get('/listeFormation',controllerPage.getlistFormation)
router.post('/formation',controllerPage.creationformation)
router.delete('/formation/:id',controllerPage.SuppressionFormation)
router.put('/formation',controllerPage.moduficationFormation)

// Projet
router.get('/projet/:id',controllerPage.GetUnProjet)
router.get('/listeProjet',controllerPage.getlistprojet)
router.post('/projet',controllerPage.creationProjet)
router.delete('/projet/:id',controllerPage.SuppressionProjet)
router.put('/projet',controllerPage.moduficationProjet)

// recrutement

router.post('/recrutement',controllerPage.Creationrecrutement)
router.get('/listerecrutement',controllerPage.getRecrutement)
router.delete('/recrutement/:id',controllerPage.supprimerRecrutement)
router.get('/recrutement/:id',controllerPage.getUnRecrutement)
// Accee
//initialiser l accee au poste

router.put('/AjoutAcceePoste',controllerAcee.ajoutAccesAuPoste)

//recherche poste

router.get('/rechercheAcceePoste/:poste',controllerAcee.recherche)

//modifier accee formation 

router.put('/acceeFormation',controllerAcee.ModificationAcceeFormation)
//modifier accee membre 
router.put('/acceeMembre',controllerAcee.ModificationAcceeMembre)
//modifier accee projet 
router.put('/acceeProjet',controllerAcee.ModificationAcceeProjet)
//modifier accee page 
router.put('/acceePage',controllerAcee.ModificationAcceePage)
//modifier accee recrutement 
router.put('/acceeRecrutement',controllerAcee.ModificationAcceeRecrutement)
//modifier accee historique 
router.put('/acceeHistorique',controllerAcee.ModificationAcceeHistorique)
router.put('/acceeContact',controllerAcee.ModificationAcceeContact)

//Ajouter poste


router.post('/poste',controllerAcee.CreationPoste)

// GET Toutes Les Postes


router.get('/poste',controllerAcee.getPostes)

// get l accee d une poste

router.get('/AcceePoste/:poste',controllerAcee.getAcceePoste)

//Ajout Historique

router.post("/HistoriqueUser",controllerAcee.AjoutHistoriqueUser)
router.delete('/HistoriqueUser/:id',controllerAcee.SuppressionHistoriqueUser)
router.get('/HistoriqueUser',controllerAcee.getHistoriqueUser)


// Ajout Contact

router.post('/contact',controllerPage.AjoutContact)

router.get('/contact',controllerPage.getAllContact)
router.delete('/contact/:id',controllerPage.supprimerContact)

router.put('/configMail',controllerAcee.InitializerConfig)
router.put('/configRecrut',controllerAcee.configrecrut)
router.get('/config',controllerAcee.getConfig)
router.post('/sendMail',controllerAcee.sendMail)

router.post('/sendContact',controllerAcee.sendMailContact)

router.put('/profile',controllerMembre.modifProfile)
router.get('/profile/:mail',controllerMembre.getProfile)


// commantaire 
// Ajout commantaire 

router.post('/commantaire',controllerPage.AjoutCommantaire)

// supprimer commantaire
router.delete('/commantaire/:id',controllerPage.SupprimerCommantair)

// get tout les commantaire d un Actions

router.get('/commantaire/:id',controllerPage.getCommantair)


router.put('/presentation2',controllerPage.ModifierPresentation2)
router.get('/presentation2',controllerPage.getPresentation2)

// developpement 

router.post('/developpement',controllerPage.AjoutDeveloppement)
router.get('/developpement/:id',controllerPage.getDeveloppement)
router.get('/listdeveloppement',controllerPage.getlistDeveloppement)
router.put('/developpement',controllerPage.ModifierDeveloppement)
router.delete('/developpement/:id',controllerPage.SupprimDeveloppement)


router.get('/motdepass/:mail',controllerAcee.getMotdepass)


router.post('/inscrir',controllerPage.AjoutInscrir)

router.get('/inscrir/:idform',controllerPage.getInscrir)


// la page home

router.put('/homeVisionv2',controllerPage.modifierVisionHome)

router.put('/homeMissionv2',controllerPage.modifiermissionHome)
router.put('/homeCredov2',controllerPage.modifieCredoHome)
router.put('/homePresentationv2',controllerPage.modifiePresentationHome)
router.get('/home',controllerPage.getHome)
router.put('/inscrirForm',controllerPage.modifFormationInscrir)

router.post('/authentification',async (req,res)=>{
const mail=req.body.mail
const pass=req.body.pass
var ma={mail:mail,pass:pass}
var token= jwt.sign(ma,'afc38722b961912fb2bf96b71b32004004e3a6b3bc75266b3b66ec8a08427661e7005edc1667ad1')
var x=await controllerMembre.getAuth(mail,pass)
if(x===true){
 
 res.json({t:token,auth:true})
}else{
  res.json({t:token,auth:false})
}

})

router.post('/isConnect',async (req,res)=>{
const t=req.body.t
if(t!==null){

  try{
  gettoken=jwt.verify(t,'afc38722b961912fb2bf96b71b32004004e3a6b3bc75266b3b66ec8a08427661e7005edc1667ad1')
  var x=await controllerMembre.getAuth(gettoken.mail,gettoken.pass)
  res.json({mail:gettoken.mail,b:x})
  }catch(err){
res.json({mail:'',b:false})
  }






}else{
  res.json({mail:'',b:false})
}



})



// Ajout bureau 

router.post('/bureaux',controllerMembre.ajoutBureau)

//modifier poste du bureaux

router.put('/bureaux',controllerMembre.modifierpostbureaux)
router.delete('/bureaux/:id',controllerMembre.supprimerBureauPoste)

router.get('/bureaux',controllerMembre.getBureaux)




// Ajout payement


router.post('/payement',controllerMembre.AjoutPayement)

// get la liste de payement

router.get('/payement',controllerMembre.getPayement)








module.exports=router