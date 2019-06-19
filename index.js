var app = require('express')();
var ks = require('node-key-sender');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var start = /start/;
var stop = /stop/;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);

    var started = start.test(msg);
    var stoped = stop.test(msg);

    /*if(started && !stoped){
      msg = msg.substring(msg.indexOf(' ')+1);
      ks.setOption('globalDelayPressMillisec', 1000);
      console.log('start');
    }else if (stoped) {
      started = false;
      ks.setOption('globalDelayPressMillisec', 0);
      console.log('stop');
    }*/

    switch (msg) {
      case 'left':
          ks.sendKey('left');
        break;
      case 'down':
        ks.sendKey('down');
        break;
      case 'up':
        ks.sendKey('up');
        break;
      case 'right':
        ks.sendKey('right');
        break;
      case 'select':
        ks.sendKey('space');
        break;
      case 'start':
        ks.sendkey('enter');
        break;
      case 'x':
        ks.sendKey('s');
        break;
      case 'b':
        ks.sendKey('x');
        break;
      case 'y':
        ks.sendkey('a');
        break;
      case 'a':
        ks.sendkey('z');
        break;
      case 'l':
        ks.sendkey('q');
        break;
      case 'r':
        ks.sendkey('w');
        break;
      default: return null;
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
