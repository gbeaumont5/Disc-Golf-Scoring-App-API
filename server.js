const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3003;


app.use(express.json());



//Error / Disconnection

mongoose.connection.on('error', err => console.log(err.message + 'is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect('mongodb://localhost:27017/scores', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
});

//Controllers/Routes
const scoresController = require('./controllers/scores');
app.use('/scores', scoresController);

//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});