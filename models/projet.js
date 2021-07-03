const mongoose=require('mongoose')
var sch=mongoose.Schema


var s=new sch({
titre:String,
text:String,
image:[],
formateur:String,
dat:Date

})
const projet=mongoose.model('projet',s)
module.exports=projet