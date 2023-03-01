import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Axios from 'axios'

const baseUrl = "https://next-labs-backend.vercel.app/";

const UserPoints = () => {
    let {user, authTokens} = useContext(AuthContext)
    const [userData, setUserData] = useState([])

    console.log('my points',user.user_points, user.username);
    useEffect(()=>{
      try {
          Axios.get(baseUrl + 'user/userprofile/',{
              headers:{
                  Authorization:`Bearer ${authTokens?.access}`,
                  
              }
          }).then((res)=>{
              console.log('here is data ',res.data[0]);
              setUserData(res.data[0])
          }).catch((res)=>{
              console.log('here is catch',res);
          })
      } catch (error) {
          console.log('her is next catch');
      }
  },[])

  return (
    <div>
    <div >
      <div className="relative container bg-white ml-10 mt-14 px-6 w-8/12 border-2 border-gray-600 text-gray-500 md:px-12 xl:px-40">
        
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            {/* <div>
                <h2 className="text-purple-900  text-center text-3xl font-semibold">
                Points
                </h2>
            </div> */}
          <div className="border-2 border-gray-400 mt-10 rounded-sm mb-10 shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-indigo-700 font-bold">
                  MY POINTS
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <a href="">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        {userData?.user_points} Points
                      </span>
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserPoints