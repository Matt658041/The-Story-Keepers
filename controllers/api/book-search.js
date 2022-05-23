const express = require ('express');
const router = express.Router()
const fetch = require('node-fetch');

import fetch from 'node-fetch';

const body = {a: 1};

const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();

console.log(data);


module.exports = router;
