
var heroku = true;



if (heroku){
    const PORT =  process.env.PORT || 5000 ;
    var serverPort = PORT;
}
else {
    var serverPort = 65201;
}



var express = require('express'); // referenced the express module which is a web framework that will help us render our static files
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);  // 

var os = require('os');


// players 
var players={}

var players_emmited=0;
let output = '';
var https_address='';
var QRurl;
var server_is_connected=false;

io.on('connection', function (socket) {  // upon connection we start listening - on that socket! (player) - for his potential disconnection

    var already_in_the_list = false;
    
    Object.keys(players).forEach(function (id) {
        if (players[id].playerId === socket.id ){
            already_in_the_list = true;
        }
    })
    
    console.log("SOMEONE CONNECTED TO SERVER ! ")
    
}); /// on connection ends here!!!!!!!

app.use('/assets', express.static('assets'));
  
app.get('/', function(req, res){
        
    res.sendFile('./assets/index_Server.html', { root: '.' });
        
});      // told server to serve index.html as our first root page

app.get('/client', function(req, res){
        
    res.sendFile('./assets/index_Client.html', { root: '.' });
        
});      // told server to serve index.html as our first root page



server.listen(serverPort, function() {    // told server to start listening on given port
    
});



console.log("PLATFORM ", os.platform());
console.log('')

