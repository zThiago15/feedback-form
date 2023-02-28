import express, { Request, Response } from 'express';
import feedbackRoute from './routes/feedbackRoutes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger/swagger.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(feedbackRoute);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (_req: Request, res: Response) => {
    return res.status(200).send('Welcome to server');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Listening at port ${port}`);
});

