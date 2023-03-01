import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    
    const [loading, setLoading] = useState(true)
     
    //base url to pass as context
    const baseUrl = "https://next-labs-backend.vercel.app/";


    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault() 
        const response = await fetch(baseUrl + 'api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        const data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log('mmmmmmmmmmmm', jwt_decode(data.access).username)
            if (jwt_decode(data.access).is_superadmin){
                navigate('/admin/home')
            }else{
                navigate('/user/home')
            }
        }else{
            alert('Something went wrong!')
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    const contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        baseUrl:baseUrl,
    }


    useEffect(()=> {
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    
    return(
        <AuthContext.Provider value={contextData}>
            { loading ? null : children }
        </AuthContext.Provider>
    )
}