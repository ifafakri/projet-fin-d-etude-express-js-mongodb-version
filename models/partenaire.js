const mongoose=require('mongoose')
const sch =mongoose.Schema

const p=new sch({
image:String

})

const partenair=mongoose.model('partenair',p)
module.exports=partenair