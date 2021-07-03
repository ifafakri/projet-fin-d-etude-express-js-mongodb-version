const mongoose=require('mongoose')

const sc=mongoose.Schema




const pres=new sc({
id:Number,
titre:String,
description:String,
video:String


})


const presentation=mongoose.model('presentation',pres)
module.exports=presentation