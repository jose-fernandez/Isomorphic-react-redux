/**
 * Created by jose.e.rodriguez on 24/07/2017.
 */
import express from 'express';
import { apiPort } from '../config/env';
const app = express();
app.get('/api', (req, res) => {
	res.send('Hello, world!');
});
app.listen(apiPort, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`Api listening on port ${apiPort}!`);
	}
});