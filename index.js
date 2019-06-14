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

    if(started && !stoped){
      msg = msg.substring(msg.indexOf(' ')+1);
      console.log('start');
    }else if (stoped) {
      started = false;
      console.log('stop');
    }
    switch (msg) {
      case 'left':
        if (started){
          //ks.sendKey('a').globalDelayPressMillisec(60);
          //ks.setOption(globalDelayPressMillisec(60), 'a')
        }else {
          ks.sendKey('a');
          ks.sendKey('left');
        }
        break;
      case 'down':
        ks.sendKey('s');
        ks.sendKey('down');
        break;
      case 'up':
        ks.sendKey('w');
        ks.sendKey('up');
        break;
      case 'right':
        ks.sendKey('d');
        ks.sendKey('right');
        break;
      case 'jump':
        ks.sendKey('space');
        break;
      case 'escape':
        ks.sendKey('escape');
        break;
      case 'enter':
        ks.sendKey('enter');
        break;
      case 'back':
        ks.sendkey('back_space');
        break;
      default: return null;
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
