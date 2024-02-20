import httpCLient from "../http-common";

const postAddBookInfo = (data) =>{
    return httpCLient.post('books/add', data);
}

export default {postAddBookInfo};
