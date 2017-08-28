
var express = require('express');
var app = express();
var desk = new Array("c","c","c","c");
var bodyParser = require('body-parser');
var exec = require('child_process').exec;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Connected!\n' + 
    desk[0] + desk[1] + desk[2] + desk[3] );
  console.log('Someone came here' 
  	+ '\ndesk[0] : ' + desk[0]
  	+ '\ndesk[1] : ' + desk[1]
  	+ '\ndesk[2] : ' + desk[2]
  	+ '\ndesk[3] : ' + desk[3]);


});

app.post('/reservation', function(req, res){
  console.log(req.body.student_num + "번 학생" + 
    req.body.desk_num + "번 책상" + 
    req.body.desk_kind + "눌림!");
  res.send(Number(desk[req.body.desk_num]).toString());
  desk[req.body.desk_num] = req.body.desk_kind;

 console.log(
   '\ndesk[0] : ' + desk[0]
   + '\ndesk[1] : ' + desk[1]
   + '\ndesk[2] : ' + desk[2]
   + '\ndesk[3] : ' + desk[3]);

 if(req.body.desk_kind == "a"){
  exec('echo "a">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }
 else if(req.body.desk_kind == "b"){
  exec('echo "b">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }
 else if(req.body.desk_kind == "c"){
  exec('echo "c">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

