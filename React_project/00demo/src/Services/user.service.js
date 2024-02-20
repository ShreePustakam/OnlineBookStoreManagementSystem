import httpClient from "../http-common";

const postSignupInfo = (data) =>{
    return httpClient.post('customer/SignUp', data);
}

const updateProfile = (data, cid) => {
    return httpClient.put('customer/edit/'+cid, data);
  };

export default {postSignupInfo, updateProfile};