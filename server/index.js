const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bC = require('./controllers/messages_controller');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));


const port=3000
app.listen(port, () => console.log(`Listening on port ${port}`));


app.post('/api/messages', bC.create);
app.get('/api/messages', bC.read);
app.put('/api/messages/:id', bC.update);
app.delete('/api/messages/:id', bC.delete);
