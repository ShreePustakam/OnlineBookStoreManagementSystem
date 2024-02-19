import httpCLient from "../http-common";

const postSignupInfo = (data) =>{
    return httpCLient.post('customer/SignUp', data);
}

export default {postSignupInfo};