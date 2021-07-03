const mongoose=require('mongoose')
const sh=mongoose.Schema

const m=new sh({
    nom:String,
 prenom:String,
description:String,
   mail:String,
   poste:String,
   image:String,

   
})

const bureaux=mongoose.model('bureaux',m);
module.exports=bureaux
