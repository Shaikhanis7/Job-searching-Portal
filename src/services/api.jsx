import axios from 'axios';

// const baseURL = 'http://65.1.244.186:7777/api';
const baseURL = 'http://localhost:7777/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const SignUp = (name, email, password, phone,) => 
    axiosInstance.post('/auth/register', { name, email, phone, password });

const SignIn = (email, password) => 
    axiosInstance.post('/auth/login', { email, password });

const UserData = (email) => 
    axiosInstance.get(`/users/email/${email}`);

const UpdateUserByID = (id, data) => 
    axiosInstance.put(`/users/update/${id}`, data);

const DeleteUserByID = (id) => 
    axiosInstance.delete(`/users/delete/${id}`);
const CreateCompany = (name, contactEmail, contactPhone) =>
    axiosInstance.post(`${baseURL}/companies`, { name, contactEmail, contactPhone });

const GetAllCompanies = () => axiosInstance.get('/companies');

const UpdateCompany = (id, companyData) =>
    axiosInstance.put(`/companies/${id}`, companyData);

const DeleteCompany = (id) => axiosInstance.delete(`/companies/${id}`);


// Admin
const getAllUsers = () => 
    axiosInstance.get('/users/all');

export { axiosInstance, SignUp, SignIn, CreateCompany,GetAllCompanies,UpdateCompany,DeleteCompany, UserData, UpdateUserByID, DeleteUserByID, getAllUsers };
