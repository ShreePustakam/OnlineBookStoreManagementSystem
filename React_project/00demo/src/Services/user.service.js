import httpClient from "../http-common";

export async function loginUser(userData) {
  try {
      const response = await httpCLient.post('customer/Login', userData);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
}

const postSignupInfo = (data) =>{
    return httpClient.post('customer/SignUp', data);
}

const updateProfile = (data, cid) => {
    return httpClient.put('customer/edit/'+cid, data);
  };

export default {postSignupInfo, updateProfile};