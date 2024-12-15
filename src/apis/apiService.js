import Api from "./interceptor";

export async function adminLogin(data) {
  try {
    console.log(data);

    const response = await Api.post("login", data, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error("Error during admin login:", error);
    throw error;
  }
}

export async function getUsers() {
    try {
  
      const response = await Api.get("users/list");
      return response;
    } catch (error) {
      console.error("Error during admin login:", error);
      throw error;
    }
  }
  
  export async function getUserCount() {
    try {
      const response = await Api.get("dashboard/user-count");
      return response;
    } catch (error) {
      console.error("Error during admin login:", error);
      throw error;
    }
  }

  export async function AddUser(data) {
    try {
      console.log(data,'ddddd');
      
      const response = await Api.post("users/create",data);
      return response;
    } catch (error) {
      console.error("Error during admin login:", error);
      throw error;
    }
  }
  
  