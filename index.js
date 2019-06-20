var app = require('express')();
var ks = require('node-key-sender');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);

  /*  var started = start.test(msg);
    var stoped = stop.test(msg);

    if(started && !stoped){
      msg = msg.substring(msg.indexOf(' ')+1);
      ks.setOption('globalDelayPressMillisec', 1000);
      console.log('start');
    }else if (stoped) {
      started = false;
      ks.setOption('globalDelayPressMillisec', 0);
      console.log('stop');
    }*/
    if(msg.indexOf("/") > -1){
      switch (true) {
        case /left/i.test(msg):
            ks.sendKey('left');
          break;
        case /down/i.test(msg):
          ks.sendKey('down');
          break;
        case /up/i.test(msg):
          ks.sendKey('up');
          break;
        case /right/i.test(msg):
          ks.sendKey('right');
          break;
        case /select/i.test(msg):
          ks.sendKey('space');
          break;
        case /start/i.test(msg):
          ks.sendkey('enter');
          break;
        case /x/i.test(msg):
          ks.sendKey('s');
          break;
        case /b/i.test(msg):
          ks.sendKey('x');
          break;
        case /y/i.test(msg):
          ks.sendkey('a');
          break;
        case /a/i.test(msg):
          ks.sendkey('z');
          break;
        case /l/i.test(msg):
          ks.sendkey('q');
          break;
        case /r/i.test(msg):
          ks.sendkey('w');
          break;
        default: return null;
      }
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
