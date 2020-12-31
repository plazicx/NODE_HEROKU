12/6/2020
# NODE_HEROKU
testing node server heroku cloud deployment

this is the example of creating cloud deployment of node.js for establishing socket.io communication between node server.js and everybody else.
You can do a local test 
npm install

node server.js 

open browser and connect to http://localhost:5000/server
and in other tab http://localhost:5000/client

what happens is that /server launches index_Server.html in which main_Server.js   - starts socket.io client and communicates to node server.js 
then - it creates peer.js peer and send his peer_id to node server via soket.io.

Now, when client connects via /client - > index_Client.html   -> main_Client.js   it starts socket.io client and asks node server to get masters peer_id.
Node server replies via socket.io. Now client starts peer and requests connection to masters peer_id.  Once they connect via peer.js client says "hello!" to master via peer_js
and master replies "hello to you too!".  And that is the backbone for MP cloud based games where low latency input from clients to server is established as well as reliable socket.io communication via server.

This can also be deployed in heroku. 
follow:
https://frontend.turing.io/lessons/module-4/deploy-to-heroku.html


heroku login

heroku create app_name
git remote -v
git push heroku
heroku open

whatever opens - copy the address and add /client at the end
for example
https://gentle-ridge-82583.herokuapp.com/client


heroku ps
heroku stop web.1



to connect as client passing specific server id do 

http://localhost:5000/client?ser_id=whateva

that will be the QR code which server will generate!!!!  using its own socket_io as ser_id so that client that is connecting to that server knows how to identify it! This is quite simple!




