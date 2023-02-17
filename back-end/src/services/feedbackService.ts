import { IFeedback } from "../interfaces/feedback";
import { PrismaClient } from '@prisma/client';

export default class FeedbackService {
    constructor(private prisma = new PrismaClient()) { }

    create =  async (feedback: IFeedback) => {
        await this.prisma.feedback.create({
            data: feedback
        })

        return true;
    }
}