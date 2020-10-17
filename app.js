const express = require('express');
const path = require('path');

const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.sendFile('./src/index.html', {root : __dirname});
});

app.listen(port, ()=>{
    console.log('App listening on port '+ port);
});