import { NextFunction, Request, Response } from "express";

export default class FeedbackMiddleware {
    verifyData = (req: Request, res: Response, next: NextFunction) => {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(404).json({ message: 'Error: name, e-mail and message are required!' });
        }

        next();
    }
}