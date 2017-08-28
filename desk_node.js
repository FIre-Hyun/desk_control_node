
var express = require('express');
var app = express();
var desk = new Array("c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c");
var number = new Array("00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00");
var bodyParser = require('body-parser');
var exec = require('child_process').exec;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res) {

  var accountObj = {
    desk0: desk[0],
    desk1: desk[1],
    desk2: desk[2],
    desk3: desk[3],
    desk4: desk[4],
    desk5: desk[5],
    desk6: desk[6],
    desk7: desk[7],
    desk8: desk[8],
    desk9: desk[9],
    desk10: desk[10],
    desk11: desk[11],
    desk12: desk[12],
    desk13: desk[13],
    desk14: desk[14],
    desk15: desk[15],
    number0: number[0],
    number1: number[1],
    number2: number[2],
    number3: number[3],
    number4: number[4],
    number5: number[5],
    number6: number[6],
    number7: number[7],
    number8: number[8],
    number9: number[9],
    number10: number[10],
    number11: number[11],
    number12: number[12],
    number13: number[13],
    number14: number[14],
    number15: number[15],
};
var accountStr = JSON.stringify(accountObj);

  console.log(accountStr);

  res.send(accountStr);

  console.log('Someone came here' 
  	+ '\ndesk[0] : ' + number[0] + '학생 ' + desk[0]
  	+ '\ndesk[1] : ' + number[1] + '학생 ' + desk[1]
  	+ '\ndesk[2] : ' + number[2] + '학생 ' + desk[2]
  	+ '\ndesk[3] : ' + number[3] + '학생 ' + desk[3]);


});


app.post('/reservation', function(req, res){
  console.log(req.body.student_num + "번 학생" + 
    req.body.desk_num + "번 책상" + 
    req.body.desk_kind + "눌림!");
  res.send(Number(desk[req.body.desk_num]).toString());
  desk[req.body.desk_num] = req.body.desk_kind;
  number[req.body.desk_num] = req.body.student_num;

  console.log('Someone came here' 
    + '\ndesk[0] : ' + number[0] + '학생 ' + desk[0]
    + '\ndesk[1] : ' + number[1] + '학생 ' + desk[1]
    + '\ndesk[2] : ' + number[2] + '학생 ' + desk[2]
    + '\ndesk[3] : ' + number[3] + '학생 ' + desk[3]);

 if(req.body.desk_num == 0 && req.body.desk_kind == "a"){
  exec('echo "a">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }
 else if(req.body.desk_num == 0 && req.body.desk_kind == "b"){
  exec('echo "b">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }
 else if(req.body.desk_num == 0 && req.body.desk_kind == "c"){
  exec('echo "c">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log(req.body.desk_kind + " err");
  }
 });
 }

});


app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

