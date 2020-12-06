var socket=io();

var peer = new Peer(null, {
    debug: 0,
    reliable:false,
    serialization:'json',
    config: {'iceServers': [
        { url: 'stun:stun.l.google.com:19302' },
        { url: 'stun:numb.viagenie.ca', credential: 'whateva', username:'celltvgames@gmail.com' }, // Pass in optional STUN and TURN server for maximum network compatibility
        { url: 'turn:numb.viagenie.ca', credential: 'whateva', username:'celltvgames@gmail.com' },  // 
       ]} /* Sample servers, please use appropriate ones */


    });
  
  

  peer.on('open', function(id) {
            console.log('server - i.e. master0 connected!')
            var my_peer_id = id;
            var master0_id = id;
            
            console.log('this.peer ',my_peer_id);
            socket.emit('master_peer',my_peer_id);
  });
  peer.on('connection', function (c) {
    console.log('someone wants to connect ',c)
    
    c.on('data', function(data) {
      console.log('received data from client---------------------------------------------- !!!!',data)
      console.log('received from player ',this.peer)
      //var this_connection = this;
      //var this_id = this.peer;
      switch(data[0]) {
          case 'move':
              
              console.log('received greeting from ', data[1].message);
              this.send(['message',{message:'fak ju too'}]);
              
      }
  });
  
});