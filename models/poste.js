const mongoose=require('mongoose')
const s=mongoose.Schema

var p=new s({
nomPoste:String

})


var poste=mongoose.model('poste',p)
module.exports=poste

