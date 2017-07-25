var myserver = require('http');//myserver이라는 http 객체를 만듭니다.

myserver.createServer(function(req,res){//http객체로 서버를 만들고, function은 일종의 이벤트로 누군가 접속하였을때 발생합니다.
        console.log('Someone came here');//누군가 접속을 하게 되면, '여기 누가 왔엉!' 하고 표시되도록 합니다. 
        res.writeHead({'Content-Type':'text/html'});//웹브라우저에 데이터를 보낼때 헤더를 먼저 보내게 되는데, 지금부터 주는 파일의 형식이 text형식의 html이다 라는등의 정보를 보내주게 됩니다.
        res.write('<font size="200" color="green">my node.js server</font>');
//폰트크기 200에 초록색으로 글씨를 쓰는 html 코드를 클라이언트에게 전송해주도록 합니다.
        res.end();//데이터 전송을 끝냅니다.
}
).listen(1234);//함수의 설정이 끝났으니, 서버의 몇번 포트를 열어줄지, 설정합니다. 이 예제에서는 1234번 포트를 엽시다.

console.log('http:PI-IP:1234');//어느 포트로 열렷는지 간단하게 표시합니다.


