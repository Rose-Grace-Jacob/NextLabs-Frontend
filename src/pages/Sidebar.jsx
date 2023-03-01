import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { Outlet } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import {
    HomeIcon,
    UserIcon,
    ArrowUpOnSquareStackIcon,
    PlusIcon, 
    BackwardIcon
  } from "@heroicons/react/24/outline";

export default function Sidebar() {

    const navigate = useNavigate();
    // const [navbar, setNavbar] = useState(false);

    let { logoutUser } = useContext(AuthContext)

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

