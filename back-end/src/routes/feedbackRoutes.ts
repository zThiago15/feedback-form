import { Router } from 'express';
import FeedbackController from '../controllers/feedbackController';
import FeedbackMiddleware from '../middleware/feedbackMiddleware';

const route = Router();

const feedbackController = new FeedbackController();
const feedbackMiddleware = new FeedbackMiddleware();

route.post('/feedback', feedbackMiddleware.verifyData, feedbackController.create);

export default route;