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
      case 'a':
        ks.sendKey('space');
        break;
      case 'x':
        ks.sendKey('escape');
        break;
      case 'b':
        ks.sendKey('back_space');
        break;
      case 'y':
        ks.sendkey('e');
        break;
      default: return null;
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
