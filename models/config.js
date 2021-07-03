const mongoose=require('mongoose')
const s=mongoose.Schema



const con=new s({
email:String,
pass:String,
recrutement:{dateD:Date,dateF:Date}

})
const config=mongoose.model('config',con)
module.exports=config