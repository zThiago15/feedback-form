import { Router } from 'express';
import FeedbackController from '../controllers/feedbackController';

const route = Router();

const feedbackController = new FeedbackController();
route.post('/feedback', feedbackController.create);

export default route;