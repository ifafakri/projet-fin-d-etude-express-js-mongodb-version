const express=require('express')
const router=express.Router()
const controllerMembre=require('./controller/controllerMembre')
const Membre=require('./class/membre')
const controllerPage=require('./controller/ControllerPage')
const multer=require('multer')

router.get('/membre', controllerMembre.afficheListeMembre)

router.get('/membre/:mail',controllerMembre.getmembre)

router.post('/membre', function(req,res,next){
var  mb=new Membre(req.body.nom,req.body.prenom,req.body.dnais,req.body.numtel,req.body.mail,req.body.post,req.body.dateposte,req.body.motpass)

  controllerMembre.ajoutmembre(mb)
res.json(req.body.nom)

})

router.delete('/membre/:mail',function(req,res,next){
  controllerMembre.deleteMembre(req.params.mail)
  
  res.json(req.params.mail)
  
})
router.put('/membre',function(req,res,next){
var mb=new Membre(req.body.nom,req.body.prenom,req.body.dnais,req.body.numtel,req.body.mail,req.body.poste,req.body.motpass)
controllerMembre.modifierMembre(mb)
console.log(mb)
res.json(req.body.nom)
})


router.post('/pages',function(req,res,next){

res.send('les pages sont creer')
})
router.get('/pages',controllerPage.listePage)


router.put('/vision',controllerPage.modifierHome)


const dstorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./images")
    
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+"--"+file.originalname);
  }
})
const upload=multer({storage:dstorage})


router.put('/credo',controllerPage.modifierCredoHome)
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
module.exports=router