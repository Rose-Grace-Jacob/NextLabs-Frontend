import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext)

    const navigate = useNavigate();
    function odiko() {
      navigate("/register");
    }

    return (
        // <div>
        //     <form onSubmit={loginUser}>
        //         <input type="text" name='username' placeholder='Enter Your Username'/>
        //         <input type="password" name='password' placeholder='Enter Your Password'/>
        //         <input type="submit"/>
        //     </form>
        // </div>

        <div className="w-full py-32 h-screen top-0">
        {/* <img className="object-cover w-full" src="https://images.unsplash.com/photo-1653849753645-340aa6b4c636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img> */}
        {/* <div className="flex justify-center place-content-center h-screen bg-red-500 my-auto">   */}
            <div className="w-full shadow-md rounded max-w-lg my-auto mx-auto  bg-white ">
                <h1
                    className="text-indigo-700 text-4xl  justify-center text-center
                font-extrabold"
                >
                    Login{" "}
                </h1>
                <form className=" px-8 pt-6 pb-8 " onSubmit={loginUser}>
                    <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                    >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="username"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                    </div>
                    <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                    <p classNameName="text-red-500 text-xs italic">
                        Please choose a password.
                    </p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <p
                        className="inline-block align-baseline font-bold text-sm text-indigo-700 hover:text-indigo-500"
                        onClick={odiko}
                    >
                        Create an account
                    </p>
                    </div>
                </form>
            {/* </div> */}
            </div>
        </div>
    )
}

export default LoginPage