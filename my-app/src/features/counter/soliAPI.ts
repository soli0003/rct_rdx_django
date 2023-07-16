import axios from 'axios';
import { log } from 'console';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const MY_SERVER = 'http://127.0.0.1:8000';

// Function to perform a login request
export const loginServer = async (username: string, password: string) => {
    const response = await axios.post(`${MY_SERVER}/login`, { username, password });    
    localStorage.setItem("access", response.data.access)
    sessionStorage.setItem("refresh", response.data.refresh)    
    const jwtUsername = getUsernameFromToken(response.data.access);
    console.log('Username:', jwtUsername)
    
    return response.data;
};



export const getRefresh = async (refreshToken: any) => {  
    const response = await axios.post(`${MY_SERVER}/refresh`, {refresh:refreshToken});        
    return response.data;
};


interface MyTokenPayload {
    username: string;
    // Add other properties from your token payload if needed
  }


const getUsernameFromToken = (token: string): string | null => {
  try {
    const decodedToken = jwtDecode<MyTokenPayload>(token);
    const username = decodedToken.username;
    return username;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};



// const token = localStorage.getItem('access') || ''; // Replace with your actual token
// const username = getUsernameFromToken(token);
// console.log('Username:', username);
  


  
