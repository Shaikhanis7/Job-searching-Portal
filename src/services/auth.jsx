// import { UserData } from "./api";
// import { authService } from "./auth"


// const email = authService.getUserEmail();
// const getUserData = async () => {
//     const res = await UserData(email)
//     console.log('ww')
//     return res?.data;

// }
// const getUsername = async () => {
//     const res = await getUserData()
//     return res?.name;
// }
// const getUserID = async () => {
//     const res = await getUserData()
//     console.log(res?.id)
//     return res?.id;
// }

// export const User = { getUsername, getUserData, getUserID }



import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// Define the base URL for the API
const baseURL = 'http://localhost:7777/api';

// Function to store the token in localStorage
const setToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
        console.log("Token stored successfully:", token);
    } else 
    {
        console.error("Attempted to set an undefined token.");
    }
};

// Function to get the token from localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Function to check if the token is valid (basic check for JWT structure)
const isValidToken = (token) => {
    return token.split('.').length === 3;
};

// Function to get the user's email from the token
const getUserEmail = () => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode(token);
            return payload.sub;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return null;
};

// Function to get the user's role from the token
const getUserRole = () => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode(token);
            return payload.role;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return null;
};

// Function to check if the user is logged in (valid token and not expired)
const isLoggedIn = () => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode(token);
            return Date.now() < payload.exp * 1000;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return false;
};

// Create an authenticated Axios instance
const createAxiosInstance = () => {
    const token = getToken();
    return axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
};

// Function to get user details by ID
const getUserDetails = async (userId) => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.get(`/users/${userId}`);
        return response;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

// Function to handle user sign-in and store the token
const SignIn = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, { email, password });
        console.log("Login response:", response.data);

        const accessToken = response.data;
        if (accessToken) {
            setToken(accessToken);
        } else {
            console.error("Token is missing in the response.");
        }

        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Function to handle user sign-out (clear localStorage)
const SignOut = () => {
    localStorage.clear();
};

export const authService = {
    getToken,
    setToken,
    getUserEmail,
    getUserRole,
    isLoggedIn,
    SignIn,
    SignOut,
    getUserDetails,
};
