const mongoose=require('mongoose')
const sch=mongoose.Schema

const h=new sch({
nom:String,
prenom:String,
action:String,
description:String,
date:String

})
const histUser=mongoose.model('historiqueUser',h)
module.exports=histUser