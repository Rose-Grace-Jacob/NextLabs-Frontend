import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className='text-center font-semibold text-2xl '>
            {user && <p>Hello {user.username}</p> }
        </div>
    )
}

export default Header