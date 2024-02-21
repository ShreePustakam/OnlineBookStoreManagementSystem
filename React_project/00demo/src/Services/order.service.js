import httpClient from "../http-common";

export async function myOrders(cId) {
  try {
      const response = await httpClient.get('/orders/'+cId);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
}

export async function orderBooks(oId) {
    try {
        const response = await httpClient.get('/orders/books/'+oId);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function allOrders() {
    try {
        const response = await httpClient.get('/orders/');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
  }

  export async function ChangeOrderStatus(oStatus,oId) {
    try {
        const response = await httpClient.put('/orders/'+oStatus+"/"+oId);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
  }