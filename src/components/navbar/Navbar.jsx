import React from 'react'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import NavPages from './NavPages'
import NavUserLogo from './NavUserLogo'

const Navbar = () => {
  return (
    
<nav className="nav">
  <div className="container flex flex-wrap justify-between items-center md:items-center mx-auto">
   <NavLogo/>

   <NavMenu/>
   

   <NavUserLogo/>
  </div>
</nav>

  )
}

export default Navbar