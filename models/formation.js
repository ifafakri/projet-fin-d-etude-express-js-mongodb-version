const mongoose=require('mongoose')
var sch=mongoose.Schema


var s=new sch({
titre:String,
text:String,
dat:Date,
formateur:String,
image:[],
inscrir:Boolean,
liens:String

})
const formation=mongoose.model('formation',s)
module.exports=formation