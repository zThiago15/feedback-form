import api from '.';
import { IFeedback } from '../interfaces/IFeedback';

export const createContact = async (data: IFeedback) => {
    const response = await api.post('/feedback', data);
    return response.status;
};
