const mongoose=require('mongoose')
const sc=mongoose.Schema


const hom=new sc({
vision:{titre:String,description:String},
mission:{titre:String,description:String},
presentation:{titre:String,description:String,image:String},
credo:{titre:String,description:String},

})

const home=mongoose.model('home',hom)
module.exports=home