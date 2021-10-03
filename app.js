const express=require("express")
const multer=require('multer')
const connection=require('./controller/connectionsMongoDB')



require('events').EventEmitter.defaultMaxListeners = 100;
var app=express()
app.disable('x-powered-by')

const fileUpload = require('express-fileupload');
app.use(fileUpload());

var router=require('./router')

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json({limit: '50mb', extended: true})); // support json encoded bodies
  app.use(express.json())


app.use('/',router)


app.listen(3000)
