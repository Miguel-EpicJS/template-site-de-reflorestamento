const express = require('express');
const app = express();

app.use(express.static('views'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


const server = app.listen(3000, () => {
    console.log(`Server linstening on port ${server.address().port}`);
});