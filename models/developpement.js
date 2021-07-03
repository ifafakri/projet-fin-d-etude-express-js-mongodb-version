const mongoose=require('mongoose')

const sc=mongoose.Schema




const pres=new sc({
titre:String,
icon:String,
text:String


})


const developpement=mongoose.model('developpement',pres)
module.exports=developpement