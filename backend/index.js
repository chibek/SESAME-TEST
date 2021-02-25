import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {config} from 'dotenv';
import {getWorkEntries, getWorkEntrie, postWorkEntrieClockIn,postWorkEntrieClockOut} from './routes/index.js';
config();
// environment: development, testing, production
const environment = process.env.NODE_ENV;
/**
 * express application
 */
const api = express();
api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
// public REST API
api.get('/work-entries/:id', async function (req, res) {
	const  workEntrie = await getWorkEntrie(req.params.id);
	res.send(workEntrie[0]);
 });
 
api.get('/work-entries', async function (req, res) {
	const  workEntries = await getWorkEntries();
	res.send(workEntries);
  });

api.post('/work-entries/clock-in', async function (req, res) {
	const  workEntrie = await postWorkEntrieClockIn(req.body);
	res.send(workEntrie);
 });

 api.post('/work-entries/clock-out', async function (req, res) {
	const  workEntrie = await postWorkEntrieClockOut(req.body);
	res.send(workEntrie);
 });

api.listen(process.env.port, () => {
	if (
		environment !== 'production' &&
		environment !== 'development' &&
		environment !== 'testing'
	) {
		console.error(
			`NODE_ENV is set to ${environment}, but only production and development are valid.`
		);
		process.exit(1);
	}
	console.log(`Starting at port ${process.env.port}`);
});


