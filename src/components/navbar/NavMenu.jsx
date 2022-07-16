import React, { useState } from 'react'
import NavbarIcon from './NavbarIcon';
import {GiHamburgerMenu} from "react-icons/gi"
import NavPages from './NavPages';
const NavMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e)=>{
       setIsActive(!isActive)
      }
  return (
    <div className='nav-menu'>

        <div onClick={handleClick}>
        <NavbarIcon icon={<GiHamburgerMenu size="22" color='white'/>}/>
        </div>
        {isActive &&  <article className='absolute  w-screen h-44 top-10 right-[-0.5rem] py-3.5 font-fira-sans bg-nav-hamburguer'>
        <NavPages setModalActive={setIsActive}  />
        </article> }
  
    </div>
  )
}

export default NavMenu