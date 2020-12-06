//import io from 'socket.io-client';


var socket=io();
console.log('socket ', socket)

socket.emit('tell_me_master_peer','whateva')
      
socket.on('master_peer_from_server',function (tmp){
  console.log('received master peer id .... connecting ...... ',tmp)
    var master_peer = tmp;
    if (!peer) {
        var peer = new Peer(null, {
          debug: 0,
          serialization:'json',
          reliable:false,
          config: {'iceServers': [
            { url: 'stun:stun.l.google.com:19302' },
            { url: 'stun:numb.viagenie.ca', credential: 'whateva', username:'celltvgames@gmail.com' }, // Pass in optional STUN and TURN server for maximum network compatibility
            { url: 'turn:numb.viagenie.ca', credential: 'whateva', username:'celltvgames@gmail.com' },  // 
           ]} /* Sample servers, please use appropriate ones */
          });
        var peer_connection = peer.connect(tmp, {
          reliable: false,
          serialization: 'json'

        });
        peer_connection.on('open', function() {
            // Receive messages
            peer_connection.on('data', function(data) {
              console.log('received data from ',this.peer)
              switch(data[0]) {
                    case 'message':
                    console.log('Received', data[1].message);
              }
              
            });

            peer_connection.send(['move', {message:'fak ju'} ]);
            
        });
        
        


    }
})