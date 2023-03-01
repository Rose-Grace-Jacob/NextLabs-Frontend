import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";


const baseUrl = "http://127.0.0.1:8000/";

function UserProfile() {
  let { authTokens, user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    try {
      axios.get(baseUrl + 'user/userprofile', {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      })
        .then((res) => {
          console.log("here is data ", res.data[0].email);
          setUserData(res.data[0]);
        })
        .catch((res) => {
          console.log("here is catch", res);
        });
    } catch (error) {
      console.log("her is next catch");
    }
  }, []);
  return (
    <div className="bg-white border-2 border-gray-500 mt-14 ml-20 w-8/12">
      <div className="grid-rows-2">
        <div className="">
          <h1 className="text-indigo-700 pt-6 text-center text-3xl font-semibold">
            Profile
          </h1>
        </div>
      </div>

      <div className="pb-5  grid grid-cols-1  place-items-center py-6 ">
        <div class="w-full max-w-sm border-2  border-gray-400 rounded-lg shadow-md">
          <div class="flex justify-end px-4 pt-4 "></div>
          <div class="flex flex-col items-center pb-10">
            <svg
              className="w-24 h-24 mb-3 bg-gray-300 rounded-full shadow-lg "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userData?.username}
            </h5>

            <div class="flex mt-4 space-x-3 md:mt-6">
              <p className="text-gray-500">Username :</p>
              <h3>{userData?.username}</h3>
            </div>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <p className="text-gray-500">Email :</p>
              <h3>{userData?.email}</h3>
            </div>
            {/* <div class="flex mt-4 space-x-3 md:mt-6">
              <p className="text-gray-500">Email :</p>
              <h3>{userData?.email}</h3>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;