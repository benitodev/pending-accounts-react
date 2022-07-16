import React from 'react'
import {Link} from "react-router-dom"
const NavLogo = () => {
  return (
    <Link to="/" className="text-logo">
      <span className="self-center text-white text-size-logo text-xl:md font-semibold whitespace-nowrap dark:text-white">Accounts</span>
  </Link>

  )
}

export default NavLogo