const mongoose=require('mongoose')
const sh=mongoose.Schema

const m=new sh({
    nom:String,
 prenom:String,
  dnais:String,
 numtel:String,
   mail:String,
   poste:String,
   image:String,
   dateposte:String,
   motpass:String
   
})

const membre=mongoose.model('membre',m);
module.exports=membre
