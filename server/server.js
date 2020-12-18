const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()


// socket.io

const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app)
const io = socketio(server)

// io.on('connection', socket =>{
//     console.log("Hello - you are connected");
//     socket.on('disconnect', ()=>console.log('Goodye'));
//     socket.emit('breaking-news', "i'm Here!");
// })

let counter = 1
io.on('connection', socket => {
    console.log("Hello - you are connected");

    // // only for specific group
    // socket.join('vip')
    // socket.broadcast.to('vip').emit('breaking-news', `From another: ${socket.id} Title # ${counter}`);
    
    socket.on('disconnect', () => console.log('Goodye'));

    socket.emit('breaking-news', `From me: Title # ${counter}`);
    socket.broadcast.emit('breaking-news', `From another: ${socket.id} Title # ${counter}`); // start if open another window in a browser
    io.emit('breaking-news', `This is admin - counter: ${counter}`)
    counter++
    // io.emit - לכולם
    // socket.emit - רק לעצמי
})



const port = 8080 || process.env.PORT

app.get('/', (req, res) => {
    res.send("<h1>Welclome to socket.io!</h1>")
})

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

server.listen(port, () => console.log(`Server is running on port ${port}`))
