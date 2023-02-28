import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios';
import AuthContext from '../../context/AuthContext';

const AdminHome = () => {
  let { user,baseurl, authTokens } = useContext(AuthContext)
  let [data, setData] = useState([])
  

  const getData = () => {
    Axios.get('http://127.0.0.1:8000/user/adminapps/',
        {
            headers: {
                Authorization: `Bearer ${authTokens?.access}`,
                "content-type": "application/json"
            }

        }
    ).then((response) => {
        console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddd", response);
        const { data } = response
        setData(data)
        console.log("fffffffffffffffffffffffffffffffffffffffffff", data);
    })

}
useEffect(() => {
  getData()
}, []);


  return (
    <section className=" bg-gray-300 px-4 mr-5 mt-5">
    <div className="flex flex-col justify-center bg-gray-300 ml- pt-2 pb-2">
        <div className="w-full max-w-2xl mt-12 ml-16 bg-white mb-20 shadow-lg border-2 border-gray-500">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="mb-8 text-2xl text-center text-indigo-700 font-bold">My Apps</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-white bg-gray-900">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">APP</div>
                                </th>
                                {/* <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Appcategory</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Subcategory</div>
                                </th> */}
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Points</div>
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                       { data.map((list, id) => {
                    return (
                            <tr>

                                <td className="p-2 whitespace-nowrap text-center">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={list.app_image_link}  width="40" height="40" alt="App Image"/></div>
                                        <div className="font-medium text-gray-800">{list.app_name}</div>
                                    </div>
                                </td>
                                {/* <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{list?.app_category}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">{list?.sub_category}</div>
                                </td> */}
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-blue-500">{list.points}</div>
                                </td>
                            </tr>
                             )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default AdminHome