const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const input1 = req.body.input1;
    const input2 = req.body.input2;
    res.send(`You submitted: Input 1 - ${input1}, Input 2 - ${input2}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
