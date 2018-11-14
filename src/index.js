import express from 'express';
import config from 'config';
import basicLogger from 'basic-logger';
import morgan from 'morgan';
import bodyParser from 'body-parser';

global.log = new basicLogger({ showTimestamp: true });
const logger = new basicLogger({ showTimestamp: true });

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));

app.get('/', (req, res) => {
  res.send('HandBills Api');
});

try {
  const { PORT } = config.get(process.env.NODE_ENV);
  app.listen(PORT);
  logger.info(`App listening at port ${PORT}`);
} catch (e) {
  logger.error(e);
  throw e;
}
