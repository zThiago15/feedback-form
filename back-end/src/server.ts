import express, { Request, Response } from 'express';
import feedbackRoute from './routes/feedbackRoutes';

const app = express();

app.use(express.json());
app.use(feedbackRoute);

app.get('/', (_req: Request, res: Response) => {
    return res.status(200).send('Welcome to server!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Listening at port ${port}`);
});

