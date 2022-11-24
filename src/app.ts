import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes/AllRoutes';

const app = express();

app.use(cors());
app.use(express.json({limit: '1024mb'}));
app.use('', routes);
app.get('*', (req, res) => {
    res.status(404).json({msg: "not found"});
});

export default app;