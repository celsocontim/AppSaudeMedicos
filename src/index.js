import express from 'express';
import morgan from 'morgan';
import logger from './lib/logger';
import errorHandler from './lib/error.handler';
import routes from './routes';
import config from 'config';
import { initializeDB } from './db';

const app = express();
const port = config.get('port');

const httpReqLogFormat =
  ':method :url :status :res[content-length] - :response-time ms';
const httpReqLogger = morgan(httpReqLogFormat, { stream: logger.stream });

initializeDB();

app.use(express.json({limit: '10mb'}));
app.use(httpReqLogger);
app.use('/', routes);
app.use(errorHandler);
app.use((req, res, next) => {
  res.status(404).json({ message: 'Caminho não encontrado!' });
});

app.listen(port, () => {
    console.log('Ouvindo na porta', port);
});