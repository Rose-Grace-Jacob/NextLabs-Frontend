import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import {
    CloudArrowUpIcon,
    HomeIcon,
    UserIcon,
    ArrowUpOnSquareStackIcon,
    PlusIcon, 
    BackwardIcon
  } from "@heroicons/react/24/outline";

export default function Sidebar() {

    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);

    let {authTokens, logoutUser, user} = useContext(AuthContext)

    function home() {
        navigate("home");
    }  

    function profile() {
      navigate("profile");
    }

    function points() {
        navigate("points");
      }

    function tasks() {
      navigate("tasks");
    }

    return (
        // <nav className="w-full  bg-purple-700 shadow">
        //     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        //         <div>
        //             <div className="flex items-center justify-between py-3 md:py-5 md:block">
        //                 <span>
        //                     {user && 
        //                         <h2 className="text-2xl font-bold text-white">Hello {user.username}</h2>
        //                     }
                            
        //                 </span>
        //                 <div className="md:hidden">
        //                     <button
        //                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        //                         onClick={() => setNavbar(!navbar)}
        //                     >
        //                         {navbar ? (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 viewBox="0 0 20 20"
        //                                 fill="currentColor"
        //                             >
        //                                 <path
        //                                     fillRule="evenodd"
        //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                                     clipRule="evenodd"
        //                                 />
        //                             </svg>
        //                         ) : (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M4 6h16M4 12h16M4 18h16"
        //                                 />
        //                             </svg>
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div
        //                 className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        //                     navbar ? "block" : "hidden"
        //                 }`}
        //             >
        //                 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        //                     <li className="text-white hover:text-indigo-200" onClick={home}><h2>Home</h2></li>
        //                     <li className="text-white hover:text-indigo-200" onClick={profile}><h2>Profile</h2></li>
        //                     <li className="text-white hover:text-indigo-200" onClick={points}><h2>Points</h2></li>
        //                     <li className="text-white hover:text-indigo-200" onClick={tasks}><h2>Tasks</h2></li>
        //                     {/* <li className="text-white hover:text-indigo-200" onClick={logoutUser}>Logout</li> */}
        //                 </ul>

        //             </div>
        //         </div>
        //        { user ? (
        //          <div className="hidden space-x-2 md:inline-block">
        //             <span
        //                 onClick={logoutUser}
        //                 className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
        //             >
        //                 Logout
        //             </span>
        //         </div>
        //        ) : (
        //             <div className="hidden space-x-2 md:inline-block">
        //                 <span
        //                     href="javascript:void(0)"
        //                     className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
        //                 >
        //                     Sign in
        //                 </span>
        //                 <span
        //                     href="javascript:void(0)"
        //                     className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
        //                 >
        //                     Sign up
        //                 </span>
        //             </div>
        //        )}
        //     </div>
        // </nav>
        <div className="flex w-full">
            <div className="flex flex-col h-screen p-3 bg-gray-300 w-60">
                <div className="space-y-3">
                    {/* <div className="flex items-center">
                        {user && 
                            <h2 className="text-xl font-bold text-white"> Hello {user.username}</h2>
                        }
                    </div> */}
                    
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                        
                            <li>
                                <Button onClick={home} variant="gradient" className="flex mt-8 ml-8 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <HomeIcon strokeWidth={2}  className="h-5 w-5" /> Home
                                </Button>
                            </li>
                            <li>
                                <Button onClick={profile} variant="gradient" className="flex mt-8 ml-8 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <UserIcon strokeWidth={2}  className="h-5 w-5" />Profile
                                </Button>
                            </li>
                            <li>
                                <Button onClick={points} variant="gradient" className="flex mt-8 ml-8 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <PlusIcon strokeWidth={2}  className="h-5 w-5" />Points
                                </Button>
                            </li>
                            <li>
                                <Button onClick={tasks} variant="gradient" className="flex mt-8 ml-8 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <ArrowUpOnSquareStackIcon strokeWidth={2}  className="h-5 w-5" />Tasks
                                </Button>
                            </li>
                            <li>
                                <Button onClick={logoutUser} variant="gradient" className="flex mt-8 ml-8 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <BackwardIcon strokeWidth={2}  className="h-5 w-5" />Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container bg-gray-300 w-[210rem]">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

