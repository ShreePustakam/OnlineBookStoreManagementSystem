import httpCLient from "../http-common";

const postAddBookInfo = (data, isbn) => {
  return httpCLient.post(`books/images/${isbn}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export default { postAddBookInfo };
