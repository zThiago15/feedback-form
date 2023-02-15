import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    return res.status(200).send('Testing  server');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Listening at port ${port}`);
});

