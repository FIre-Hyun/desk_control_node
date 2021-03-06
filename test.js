var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0',{
baudrate: 9600,
parser: SerialPort.parsers.readline('\n')
});
 
port.on('open', function() {
  port.write('a', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('1 written');
  });
});
 
// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
 
port.on('data', function (data) {
  console.log('Read and Send Data : ' + data);
  port.write(data);
});


출처: http://hinco.tistory.com/8 [생각 정리소]

출처: http://hinco.tistory.com/8 [생각 정리소]

출처: http://hinco.tistory.com/8 [생각 정리소]