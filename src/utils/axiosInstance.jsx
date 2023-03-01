import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import axiosInstance from '../utils/axiosInstance'


const baseUrl = 'https://rosegracejacob.pythonanywhere.com'
// const baseUrl = "https://next-labs-backend.vercel.app/";


const authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const axioInstance = axios.create({
    baseUrl,
    headers:{
        Authorization : `Bearer ${authTokens?.access}`
    }
})

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    }

    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log('isExpired:', isExpired)
    
    if(!isExpired) return req
     
    const response = await axios.post(`${baseUrl}/api/token/refresh/`, {
        refresh: authTokens.refresh
       });
    localStorage.setItem('authTokens', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})

export default axiosInstance; 