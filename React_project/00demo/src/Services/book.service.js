import httpCLient from "../http-common";

const getBookDetail = (isbn) =>{
    return httpCLient.get('books/{isbn}', data);
}

export default {postSignupInfo};
