// var myserver = require('http');//myserver이라는 http 객체를 만듭니다.

// myserver.createServer(function(req,res){//http객체로 서버를 만들고, function은 일종의 이벤트로 누군가 접속하였을때 발생합니다.
//         console.log('Someone came here');//누군가 접속을 하게 되면, '여기 누가 왔엉!' 하고 표시되도록 합니다. 
//         res.writeHead({'Content-Type':'text/html'});//웹브라우저에 데이터를 보낼때 헤더를 먼저 보내게 되는데, 지금부터 주는 파일의 형식이 text형식의 html이다 라는등의 정보를 보내주게 됩니다.
//         res.write('<font size="200" color="green">my node.js server</font>');
// //폰트크기 200에 초록색으로 글씨를 쓰는 html 코드를 클라이언트에게 전송해주도록 합니다.
//         res.end();//데이터 전송을 끝냅니다.
// }
// ).listen(1234);//함수의 설정이 끝났으니, 서버의 몇번 포트를 열어줄지, 설정합니다. 이 예제에서는 1234번 포트를 엽시다.

// console.log('http:PI-IP:1234');//어느 포트로 열렷는지 간단하게 표시합니다.


// app.post('/pushData', function(req, res){

// var chunk = '';

// //데이터를 가져옵니다.

// req.on('data', function(data){

// //데이터를 JSON으로 파싱합니다.

// chunk = JSON.parse(data);

// });

// req.on('end',function(){

// //파싱된 데이터를 확인합니다.

// console.log("name : "+chunk.name + " , phone : "+chunk.phone);

// });

// // 아래의 OK라는 내용이 안드로이드의 ReadBuffer를 통해

// // result String으로 바뀝니다.

// res.write("OK");

// res.end();

// });






var express = require('express');
var app = express();
//var app = express.createServer();
var desk = new Array(false,false,false,false);
var bodyParser = require('body-parser');

//app.use(express.bodyParser());

// app.configure(function(){
//   app.use(express.bodyParser());
// });

// app.use(express.json()); 

// app.use(express.urlencoded()); 

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
  console.log("여기까진 들왓서"); 
  console.log(req.body.desk_num);
  //console.log(req.method);
//  console.log(req);
  res.send(Number(desk[req.body.desk_num]).toString());
  desk[req.body.desk_num] = !desk[req.body.desk_num];


  console.log(
     '\ndesk[0] : ' + desk[0]
    + '\ndesk[1] : ' + desk[1]
    + '\ndesk[2] : ' + desk[2]
    + '\ndesk[3] : ' + desk[3]);


});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



// var express = require('express');
// var app = express.createServer();
// var desk0 = 0, desk1 = 0, desk2 = 0, desk3 = 0;
// app.configure(function(){
//   app.use(express.bodyParser());
// });

// app.get('/', function (req, res) {
//   res.send('Connected!\n' + 
//     desk0+desk1+desk2+desk3);
//   console.log('Someone came here' 
//    + '\ndesk0 : ' + desk0
//    + '\ndesk1 : ' + desk1
//    + '\ndesk2 : ' + desk2
//    + '\ndesk3 : ' + desk3);

//     desk0++;


// });

// app.post('/ReceiveJSON', function(req, res){
//   console.log(req.body);
//   res.send("ok");
// });

// app.listen(3000);
// console.log('listening to http://localhost:3000');

// app.post('/current_desk', function(req, res){

//   var chunk = '';

// //데이터를 가져옵니다.

// req.on('desk0', function(data){

// //데이터를 JSON으로 파싱합니다.

// chunk = JSON.parse(desk0);

// });

// req.on('desk1',function(){

// //파싱된 데이터를 확인합니다.

// console.log("desk0 : "+chunk.desk0 + " , desk1 : "+chunk.desk1);

// });

// // 아래의 OK라는 내용이 안드로이드의 ReadBuffer를 통해

// // result String으로 바뀝니다.

// res.write("OK");

// res.end();

// });


// app.get('/requestName', (req, res) => {

//   console.log('data get!');

//   res.set('Content-Format' , 'application/json');
//   var json_array = JSON.stringify({
//     content_type : "Application/json",
//     result_code : 200,
//     result_req : "",
//     patient_name : '김환자',
//     patient_Age : '50',
//     patient_Height : '160',
//     patient_Weight : '52',
//     patient_exercise : ['exercise1', 'exercise2', 'exercise3', 'done']
//   });
//   res.end(json_array);

// });
