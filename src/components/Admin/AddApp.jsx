import React, {useContext, useState, useEffect} from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';

const AddApp = () => {

    const Swal=require("sweetalert2")
    let { user,baseurl, authTokens  } = useContext(AuthContext)
	const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        creator:user.user_id,
        app_image_link: '',
        app_name: '',
        app_link: '',
        app_category: '',
        sub_category: '',
        points: '',

    })
    const handleChange = (e) => {

        setUserData({
            ...userData, [e.target.name]: e.target.value
            
        })
    }

    const onSubmitng = async (e) => {
        e.preventDefault()

        console.log("llllllll",userData);
        Axios.post('http://127.0.0.1:8000/user/addapps/', 
            userData,
        
            {
                headers: {
                    Authorization: `Bearer ${authTokens?.access}`,
                    "content-type": "multipart/form-data"
                }
            }
        ).then((response) => {
            if (response.status === 201) {
                navigate("/admin/home")
            Swal.fire({
                title: "New App Added",
                icon: "success",
            })}
        }).catch((err) => {
            console.log('errors catch', err);
        })
    }


  return (
    <div >
        <section className="max-w-4xl p-6 bg-white shadow-md ml-10 mt-6 border-2 border-gray-500">

        <div className="space-y-4">
            <h2 className="mb-8 text-2xl text-center text-indigo-700 font-bold">
                Add App
            </h2>
        </div>
        <form onSubmit={onSubmitng} >
                <div className='sm:grid-cols-1 ml-80' >
                    <img className="h-20 w-20 ml-16 " src={userData.app_image_link} />
                    <label className="text-black" for="username">App Image Link</label>
                    <input onChange={handleChange} value={userData.app_image_link} name="app_image_link" id="username" type="text" className="block w-fit px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring " placeholder='App Image link' required />
                </div>  
            <div className="flex justify-center  mt-6">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    
                
                    <div>
                        <label className="text-black" for="username">App Name</label>
                        <input required name="app_name" onChange={handleChange} value={userData.app_name} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-black" for="username">App Link</label>
                        <input required name="app_link" onChange={handleChange}
                            value={userData.app_link} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

                    </div>

                    <div>
                        <label className="text-black " for="passwordConfirmation">App Category</label>
                        <select onChange={handleChange} name="app_category" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                        {/* <input required name="Appname" onChange={handleChange} value={userData.Appname} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" /> */}
                
                            <option value={"Entertaiment"}>Entertaiment</option>
                            <option value={"News"}>News</option>
                            <option value={"Education"}>Education</option>
                            {/* <option>Bandung</option> */}
                        </select>
                    </div>

                    <div>
                        <label className="text-black" for="passwordConfirmation"> Sub Category</label>
                        <select onChange={handleChange} name="sub_category" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                            <option value={"SocialMedia"}>SocialMedia</option>
                            <option  value={"Live"}>Live</option>
                            <option  value={"Sports"}>Sports</option>
                            <option value={"Game"}>Game</option>
                        </select>
                    </div>

                    <div className='flex justify-center ml-10 mt-6'>
                        {/* <label className="text-black" for="passwordConfirmation">Points</label> */}
                        <input required name="points" onChange={handleChange}
                            value={userData.points} id="username" type="text" className="block w-full px-4 py-2 ml-10 text-black bg-emerald-200 border-2 border-emerald-600 duration-200 transform  focus:outline-none" placeholder='Points' />
                    </div>
                
                {userData.points ?
                    <div className="flex flex-row justify-center mt-6">
                        <button className="px-6 py-2  text-white transition-colors duration-200 font-extrabold transform bg-indigo-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                    : null}
            </div>
                    </div>
        </form>

    </section>


</div>
  )
}

export default AddApp