// Modules Import
import express from 'express';
import bodyParser from 'body-parser';

// Server configurations
import { serverPort } from '../etc/config.json';

// Application's parts import
import * as db from './utils/DataBaseUtils';

// Modules applying
db.setUpConnection();

const app = express();

app.use(bodyParser.json());

// HTTP requests
app.get('/notes', (req, res) => {
	db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
	db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
	db.deleteNote(req.params.id).then(data => res.send(data));
});

// Server Using
const server = app.listen(8080, () => {
	console.log(`Server is running ${serverPort}`)
});
