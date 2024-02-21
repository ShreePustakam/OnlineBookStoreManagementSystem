import httpClient from '../http-common';

const addToWishlist = (cId, isbn) => {
    return httpClient.post('/customer/wishlist/' + cId + '/' + isbn);
}

const myWishlist = (cId) => {
    return httpClient.get('/customer/wishlist/' + cId);
}

const removeBook = (cId, isbn) => {
    return httpClient.delete('/customer/wishlist/' + cId + '/' + isbn);
}

export default { addToWishlist ,myWishlist ,removeBook };