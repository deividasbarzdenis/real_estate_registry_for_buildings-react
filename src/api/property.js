import HTTP from './'

export const getAllProperties = () => HTTP.get('/properties');

export const addProperty = (property) => HTTP.post('/properties', property);

export const updateProperty = (id) => HTTP.update(`/properties/${id}`);

export const getProperty = (id) => HTTP.get(`/properties/${id}`);

export const deleteProperty = (id) => HTTP.delete(`/properties/${id}`);