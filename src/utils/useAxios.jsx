import jwt_decode from "jwt-decode"
import axios from 'axios'
import dayjs from "dayjs"
import { useContext } from 'react'
import AuthContext from "../context/AuthContext"



const baseUrl = 'https://rosegracejacob.pythonanywhere.com'
// const baseUrl = "https://next-labs-backend.vercel.app/";


const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext)
    
    const axiosInstance = axios.create({
        baseUrl,
        headers:{
            Authorization : `Bearer ${authTokens.access}`
        }
    });

    axiosInstance.interceptors.request.use(async req => {
    
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        console.log('isExpired:', isExpired)
        
        if(!isExpired) return req
    
    
        const response = await axios.post(`${baseUrl}/api/token/refresh/`, {
            refresh: authTokens.refresh
           });
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        
        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

     
    return axiosInstance
}


export default useAxios;