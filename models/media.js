const express=require('express')
const mongoose=require('mongoose')
const sch=mongoose.Schema

const m=new sch({
    titre:String,
    description:String,
    image:String,
    video:String
})

const media=mongoose.model('media',m)
module.exports=media