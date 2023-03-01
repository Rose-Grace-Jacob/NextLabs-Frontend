import React, {useState, useContext, useEffect} from 'react'
import Axios from 'axios'
import AuthContext from '../../context/AuthContext'


const baseUrl = "https://next-labs-backend.vercel.app/";

const UserTasks = () => {
    let { authTokens } = useContext(AuthContext)
    const [taskItems,setTaskItems] = useState([])

    useEffect(()=>{
        try {
            Axios.get(baseUrl + 'user/usertasks/',{
                headers:{
                    Authorization:`Bearer ${authTokens?.access}`,
                    "content-type": "application/json"
                }
            }).then((res)=>{
                // console.log('response',res);
                // console.log('settask',res.data.Res[0]);
                const {data} = res
                setTaskItems(data)
                console.log('pppppppppppppp', data)
            }).catch((res)=>{
                console.log('errorr');
            })
        } catch (error) {
            console.log('catch error');
        }
    },[])
  return (
    <div>
      <div className="h-full w-11/1 bg-white border-2 border-gray-600 mt-14 ml-10">
        <div className="">
          <div className="   p-3 m-autorounded-md  mb-3 ">
            <div className="">
              <h1 className="text-indigo-700  text-center text-3xl font-semibold ">
                Task
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md">
          <div>
            <div className="bg-gray-100  rounded-md">
              <table class="min-w-full border-collapse block md:table">
                <thead class="block md:table-header-group">
                  <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Sl.No
                    </th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Downloaded app
                    </th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Image
                    </th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody class="block md:table-row-group">
                 
                {taskItems.map((task,index)=>{
                    return(
                      <tr class="bg-slate-300 border border-grey-500 md:border-none block md:table-row">
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                          <span class="inline-block w-1/3 md:hidden font-bold">
                            Sl.NO
                          </span>
                        {index+1}
                        </td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                          <span class="inline-block w-1/3 md:hidden font-bold">
                            App Name
                          </span>
                          {task.app.app_name}
                        </td>
                        
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                          <span class="inline-block w-1/3 md:hidden font-bold">
                          Image
                          </span>
                          <img
                            src={task.app.app_image_link}
                            className="rounded-full w-6 sm:w-10  m-2 "
                            alt="Avatar"
                          />
                        </td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                          <span class="inline-block w-1/3 md:hidden font-bold">
                          Points
                          </span>
                          {task.app.points}
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
    </div>
  )
}

export default UserTasks