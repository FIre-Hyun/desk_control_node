
var express = require('express');
var app = express();
var desk = new Array(false,false,false,false);
var bodyParser = require('body-parser');


const bluetooth = require('node-bluetooth'); 
// create bluetooth device instance 
const device = new bluetooth.DeviceINQ();

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
  res.send(Number(desk[req.body.desk_num]).toString());
  desk[req.body.desk_num] = !desk[req.body.desk_num];

  device.listPairedDevices(console.log);
  if(desk[req.body.desk_num] == 1){
   device
   .on('finished',  console.log.bind(console, 'finished'))
   .on('found', function found(address, name){

    console.log('Found: ' + address + ' with name ' + name);

  // find serial port channel
  device.findSerialPortChannel(address, function(channel){
    console.log('Found RFCOMM channel for serial port on %s: ', name, channel);

    // make bluetooth connect to remote device
    bluetooth.connect(address, channel, function(err, connection){
      if(err) return console.error(err);

      connection.on('data', (buffer) => {
        console.log('received message:', buffer.toString());
      });

      connection.write(new Buffer('Hello!', 'utf-8'), () => {
        console.log('wrote');
      });
    });

  });

}).inquire();
 }

 console.log(
   '\ndesk[0] : ' + desk[0]
   + '\ndesk[1] : ' + desk[1]
   + '\ndesk[2] : ' + desk[2]
   + '\ndesk[3] : ' + desk[3]);




});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

