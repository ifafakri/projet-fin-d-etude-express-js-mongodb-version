const mongoose=require('mongoose')
const sh=mongoose.Schema


const p=new sh({
    home:[{titre:String,description:String,image:String},{titre:String,description:String,image:String}],
    historique:[{titre:String,description:String,image:String},{titre:String,description:String,image:String}],
    adhesion:[{titre:String,description:String},{titre:String,description:String},{titre:String,description:String}],
    presentation:[{titre:String,description:String,image:String},{titre:String,description:String,image:String},{titre:String,description:String,image:String},{titre:String,description:String,image:String}]
})

const page=mongoose.model('page',p)
module.exports=page