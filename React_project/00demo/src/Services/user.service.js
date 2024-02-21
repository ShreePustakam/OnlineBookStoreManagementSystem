import httpClient from "../http-common";

export async function loginUser(userData) {
  try {
      const response = await httpClient.post('customer/Login', userData);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
}

const postSignupInfo = (data) =>{
    return httpClient.post('customer/SignUp', data);
}

const updateProfile = (data, cId) => {
    return httpClient.put('customer/edit/'+cId, data);
  };

const getProfile = (cId)=>{
  return httpClient.get('customer/'+cId);
}

export default {postSignupInfo, updateProfile, getProfile};