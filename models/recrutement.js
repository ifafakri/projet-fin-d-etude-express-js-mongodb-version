const mongoose=require('mongoose')
var schema =mongoose.Schema



var r=new schema({
nom:String,
prenom:String,
datenais:String,
mail:String,
telephone:String,
message:String,
reponce:Boolean
})
const recrutement=mongoose.model('recrutement',r)
module.exports=recrutement
