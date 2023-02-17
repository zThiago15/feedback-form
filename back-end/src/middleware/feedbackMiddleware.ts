import { NextFunction, Request, Response } from "express";

export default class FeedbackMiddleware {
    verifyData = (req: Request, res: Response, next: NextFunction) => {
        const { name, email, feedback } = req.body;

        if (!name || !email || !feedback) {
            return res.status(404).json({ message: 'Error: name, e-mail and feedback are required!' });
        }

        next();
    }
}