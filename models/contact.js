const mongoose=require('mongoose')
const s=mongoose.Schema


const c=new s({
nom:String,
email:String,
sujet:String,
message:String,
repond:Boolean

})

const contact=mongoose.model('contact',c)

module.exports=contact