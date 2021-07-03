const mongoose=require('mongoose')
const sc=mongoose.Schema

const r= new sc({
    poste:String,
    formation:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
    membre:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
    projet:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
    page:{modufication:Boolean},
    recrutement:{affichage:Boolean},
    historique:{affichage:Boolean},
    contact:{affichage:Boolean},


})


const role=mongoose.model('role',r)
module.exports=role