import httpCLient from "../http-common";

const postAddBookInfo = (data) =>{
    return httpCLient.post('books/add', data);
}
const allBookInfo = (data) =>{
    return httpCLient.get('books/');
}
const updateBookInfo=(data)=>{
    return httpCLient.put('/books',data);
}
const getBook=(isbn)=>{
    return httpCLient.get('/books/'+isbn);
}

export default {postAddBookInfo,allBookInfo,updateBookInfo,getBook };
