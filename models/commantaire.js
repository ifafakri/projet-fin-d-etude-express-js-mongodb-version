const mongoose=require('mongoose')

const sch=mongoose.Schema


const com=new sch({
    idAction:String,
    comantaire:String,
    nom:String,
email:String
,
siteweb:String



})


const commantair=mongoose.model('commantair',com)
module.exports=commantair