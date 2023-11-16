import express from 'express';

import {errors, pageNotFound} from './middlewares/index.js';
import indexRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter)

app.use([errors, pageNotFound]);

export default app;