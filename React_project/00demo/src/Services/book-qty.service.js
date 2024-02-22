import httpClient from '../http-common';

const addToCart = (cId, isbn) => {
    return httpClient.post('/bookQty/cart/' + cId + '/' + isbn);
}

const displayCart = (cId) => {
    return httpClient.get('bookQty/cart/' + cId);
}

const setBookQuantity = (data) => {
    return httpClient.put('bookQty/cart/qty', data)
}

const removeBook = (cId, isbn) => {
    return httpClient.delete('/bookQty/cart/' + cId + '/' + isbn);
}

export default { addToCart, displayCart, setBookQuantity, removeBook };