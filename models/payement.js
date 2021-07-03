const mongoose=require('mongoose')
const sh=mongoose.Schema

const m=new sh({
    nom:String,
prix:String,
date:Date

   
})

const payement=mongoose.model('payement',m);
module.exports=payement
