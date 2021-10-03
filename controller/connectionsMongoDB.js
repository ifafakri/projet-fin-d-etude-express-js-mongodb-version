  connection=function(){
  const mongoose=require("mongoose")

  //connect
  const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,

  };
  //mongodb+srv://fakri:VkcAFqgljN99biu3@jci.yew3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  mongoose.connect('mongodb://mongo/jci', config)
  mongoose.connection.once('open',function(){
    console.log('connection reussie')
  }).on('Error',function(error){
console.log('connection error',error)
  })

}
module.exports.connection=connection
