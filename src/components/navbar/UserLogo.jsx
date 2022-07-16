import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import NavbarIcon from './NavbarIcon'

const UserLogo = () => {
    const handleClick = (e)=> {
        console.log(e.target)
    }
  return (
    <button onClick={handleClick} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
    <article className="flex justify-center items-center w-8 h-8 rounded-full">
      <NavbarIcon icon={<FaRegUserCircle size="28" color='white'/>}/>
    </article>
  </button>
  )
}

export default UserLogo