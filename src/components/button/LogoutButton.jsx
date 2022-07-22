import React from 'react'
import {FiLogOut} from "react-icons/fi"
import { isLogged } from '../../graphql/cache'
const LogoutButton = () => {
    const handleClick = ()=> {
        window.localStorage.getItem("pendingAccountsApp")
        console.log("hi")
        window.localStorage.clear()
        isLogged(false)
    }
  return (
    <div onClick={handleClick}>
        <FiLogOut></FiLogOut>
    </div>
  )
}

export default LogoutButton