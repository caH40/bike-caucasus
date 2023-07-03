import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { router } from './routes/routes.js';
import { downloadImage } from './service/download.js';
import { routerAuth } from './routes/authentication.js';
import { timers } from './service/timer.js';

const __dirname = path.resolve();
const PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONT,
  })
);
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));
app.use(cookieParser());
app.use('/api', router);
app.use('/api', routerAuth);
app.use(express.static(path.resolve(__dirname, '../client', 'build')));
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

const start = async () => {
  try {
    await mongoose
      .set('strictQuery', false)
      .connect(process.env.MONGODB)
      .then(() => console.log('Connected to Mongo..'))
      .catch((error) => console.log(error));

    // mongoose;

    app.listen(PORT, () => console.log('server started on PORT=' + PORT));
    await downloadImage();
    await timers();
  } catch (e) {
    console.log(e);
  }
};
start();
