import express from 'express';
import routes from './routes';
import config from './config';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
    config.mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    res.json(req.body);
})

app.use('/', routes())

app.listen(config.port);
