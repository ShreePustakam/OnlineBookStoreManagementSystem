import httpClient from '../http-common';

const addToCart = (cId, isbn) => {
    return httpClient.post('/bookQty/cart/' + cId + '/' + isbn);
}

export default { addToCart };