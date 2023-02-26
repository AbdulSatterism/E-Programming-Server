const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/Courses.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to our e-programming')
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/details/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = courses.find(cr => cr.id === id);
    res.send(selectedId)
})

app.listen(port, () => {
    console.log('port is running', port)
})