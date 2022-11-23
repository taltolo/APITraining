import express from 'express';
import route from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/CRMdb', {
  useNewUrlParser: true,
  useUnifiedtopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.get('/', (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
