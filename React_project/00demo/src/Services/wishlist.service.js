import httpClient from '../http-common';

const addToWishlist = (cId, isbn) => {
    return httpClient.post('/customer/wishlist/' + cId + '/' + isbn);
}

export default { addToWishlist };