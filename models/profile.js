const mongoose =require('mongoose')
const sc=mongoose.Schema



const pr=new sc({
about:String,
youtube:String,
twiter:String,
linkedin:String,
facebook:String,
gmail:String,
mail:String,
affiche:Boolean

})

const profile=mongoose.model('profile',pr)

module.exports=profile