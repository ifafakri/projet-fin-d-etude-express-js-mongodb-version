const mongoose=require('mongoose')
const sch=mongoose.Schema

const m=new sch({
    nom:String,
    dat:Date,
    adresemail:String,

    telepone:String,
    lienfb:String,
    profission:String,
    domaine:String,
    competance:String,
    idform:String,
    parrain:String,
    actif:String,
    association:String,
    deplacement:String,
    objectif:String

})

const inscrir=mongoose.model('inscrir',m)
module.exports=inscrir