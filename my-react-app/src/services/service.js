import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/product/';

export const getProducts = ()=> {
    return axios.get(API_URL);
}

export const getProduct = (id)=> {
    return axios.get(`${API_URL}${id}/`);
}

export const createProduct = (product)=> {
    return axios.post(API_URL, product);
}

export const updateProduct = (id, product)=> {
    return axios.put(`${API_URL}${id}/`, product);
}

export const deleteProduct = (id)=> {
    return axios.delete(`${API_URL}${id}/`);
}