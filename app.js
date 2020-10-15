const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile('./src/index.html', {root : __dirname});
});

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
});