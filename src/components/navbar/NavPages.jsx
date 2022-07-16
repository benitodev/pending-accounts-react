import React from 'react'
import {Link} from "react-router-dom"
const NavPages = ({setModalActive}) => {
  return (
    <div className="nav-pages">
    <ul className="flex flex-col text-base md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li className='' onClick={()=> setModalActive(false)}>
        <Link to="/profile" className="block py-2.5 text-white  md:border-b border-gray-100 hover:bg-[#80d793b0] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Profile</Link>
      </li>
      <li  className='' onClick={()=>setModalActive(false)} >
        <Link  to="/profile" className="block py-2.5  text-white  md:border-b border-gray-100 hover:bg-[#80d793b0] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li >
      <li  className='' onClick={()=>setModalActive(false)}>
        <Link to="/profile" className="block py-2.5  text-white md:border-b border-gray-100 hover:bg-[#80d793b0] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
    </ul>
  </div>
  )
}

export default NavPages