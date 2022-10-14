const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.json('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));