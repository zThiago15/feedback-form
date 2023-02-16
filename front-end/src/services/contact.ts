import api from '.';

export const createContact = async (data) => {
    const response = await api.post('/contact', data);
    return response.status;
};
