import { NextFunction, Request, Response } from "express";

export default class FeedbackController {
    constructor(private feedbackService = new FeedbackService()) { }

    create =  async (req: Request, res: Response, _next: NextFunction) => {
        const feedback = req.body;
        await this.feedbackService.create(feedback);

        return res.status(201).end();
    }
}