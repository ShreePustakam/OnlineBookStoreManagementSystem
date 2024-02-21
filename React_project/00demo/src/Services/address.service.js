import httpClient from '../http-common';

const create = (data) => {
    return httpClient.post('/address/save', data);
};

const get = (cId, data) => {
    return httpClient.get(`/address/`+cId, data);
};

const update = (cId, data) => {
    return httpClient.put('/address/edit/'+cId, data);
};

export default {create, get, update};