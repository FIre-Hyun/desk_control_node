
var express = require('express');
var app = express();
var desk = new Array(false,false,false,false);
var bodyParser = require('body-parser');
var exec = require('child_process').exec;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Connected!\n' + 
    Number(desk[0])+Number(desk[1])
    +Number(desk[2])+Number(desk[3]) );
  console.log('Someone came here' 
  	+ '\ndesk[0] : ' + desk[0]
  	+ '\ndesk[1] : ' + desk[1]
  	+ '\ndesk[2] : ' + desk[2]
  	+ '\ndesk[3] : ' + desk[3]);


});

app.post('/reservation', function(req, res){
  console.log(req.body.student_num + "번 학생" + req.body.desk_num + "번 책상");
  res.send(Number(desk[req.body.desk_num]).toString());
  desk[req.body.desk_num] = !desk[req.body.desk_num];

 console.log(
   '\ndesk[0] : ' + desk[0]
   + '\ndesk[1] : ' + desk[1]
   + '\ndesk[2] : ' + desk[2]
   + '\ndesk[3] : ' + desk[3]);

 exec('echo "b">/dev/rfcomm0', function(err, stdout, stderr){
  if(err){
    console.log("err");
  }
 });



});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

