  connection=function(){
  const mongoose=require("mongoose")

  //connect
  const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,

  };
  mongoose.connect('mongodb://localhost:27017/jci', config)
  mongoose.connection.once('open',function(){
    console.log('connection reussie')
  }).on('Error',function(error){
console.log('connection error',error)
  })

}
module.exports.connection=connection
