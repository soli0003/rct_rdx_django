import axios from 'axios';
import jwtDecode from 'jwt-decode';
const MY_SERVER = 'http://127.0.0.1:8000';

// Function to perform a login request
export const loginServer = async (username: string, password: string) => {
    const response = await axios.post(`${MY_SERVER}/login`, { username, password });    
    localStorage.setItem("access", response.data.access)
    sessionStorage.setItem("refresh", response.data.refresh)        
    return response.data;
};


export const getRefresh = async (refreshToken: any) => {  
    const response = await axios.post(`${MY_SERVER}/refresh`, {refresh:refreshToken});        
    return response.data;
};

export const logoutServer = async () => {
    try {
        await axios.post(`${MY_SERVER}/logout`);
        localStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};




export const getUsernameFromToken = (token: string): string | null => {
  try {
    const decodedToken = jwtDecode<MyTokenPayload>(token);
    const username = decodedToken.username;
    console.log(username,"sssssdsdsdsd");
    return username;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

interface MyTokenPayload {
    username: string;
    // Add other properties from your token payload if needed
  }
