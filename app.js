var express=require("express");
const path = require("path");
var session = require('express-session')
const app = express();

app.get('/',function functionName(req,res) {
//  res.render('welcom');
  res.sendFile('welcom.html', {root: __dirname })
})


app.listen(3000,function(){
   console.log("server is running at port 3000");
 });
module.exports=app;
