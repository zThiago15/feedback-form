import api from '.';
import { IContact } from '../interfaces/IContact';

export const createContact = async (data: IContact) => {
    const response = await api.post('/contact', data);
    return response.status;
};
