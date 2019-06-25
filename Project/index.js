var app = require('express')();
var ks = require('node-key-sender');
var robot = require('robotjs');
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
      /*switch (true) {
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
          ks.sendKey('enter');
          break;
        case /x/i.test(msg):
          ks.sendKey('s');
          break;
        case /b/i.test(msg):
          ks.sendKey('x');
          break;
        case /y/i.test(msg):
          ks.sendKey('a');
          break;
        case /a/i.test(msg):
          ks.sendKey('z');
          break;
        case /l/i.test(msg):
          ks.sendKey('q');
          break;
        case /r/i.test(msg):
          ks.sendKey('w');
          break;
        default: return null;
      }*/
      switch (true) {
        case /left/i.test(msg):
          robot.keyToggle('left','down');
          robot.keyToggle('left','up');
          break;
        case /down/i.test(msg):
          robot.keyToggle('down','down');
          robot.keyToggle('down','up');
          break;
        case /up/i.test(msg):
          robot.keyToggle('up','down');
          robot.keyToggle('up','up');
          break;
        case /right/i.test(msg):
          robot.keyToggle('right','down');
          robot.keyToggle('right','up');
          break;
        case /select/i.test(msg):
          robot.keyToggle('space','down');
          robot.keyToggle('space','up');
          break;
        case /start/i.test(msg):
          robot.keyToggle('enter','down');
          robot.keyToggle('enter','up');
          break;
        case /x/i.test(msg):
          robot.keyToggle('s','down');
          robot.keyToggle('s','up');
          break;
        case /b/i.test(msg):
          robot.keyToggle('x','down');
          robot.keyToggle('x','up');
          break;
        case /y/i.test(msg):
          robot.keyToggle('a','down');
          robot.keyToggle('a','up');
          break;
        case /a/i.test(msg):
          robot.keyToggle('z','down');
          robot.keyToggle('z','up');
          break;
        case /l/i.test(msg):
          robot.keyToggle('l','down');
          robot.keyToggle('l','up');
          break;
        case /r/i.test(msg):
          robot.keyToggle('r','down');
          robot.keyToggle('r','up');
          break;
        default: return null;
    }
  }
});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
/*
Berends voorbeeld
const keys = ['a', 's', 'd', 'w'];
let lastKey;
let currentKey;

setInterval(() => {
  if(lastKey){
    robot.keyToggle(lastKey, 'up');

  }
  currentKey = keys[Math.floor(Math.random() * keys.length)];
  robot.keyToggle(currentKey, 'down');
  lastKey = currentKey;
}, 1000);*/
