import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {useMutation} from "@apollo/client"
import {LOGIN} from "../graphql/mutations"
import { isLogged } from '../graphql/cache'

import Form from '../components/form/Form'
import Notification from '../components/message/Notification'
import useReset from '../hooks/useReset'

const Login = () => {
  const navigate = useNavigate()
    const [login, {data, loading, error, reset}] = useMutation(LOGIN)
    // const resetMutation = useReset(reset, data, error)
    useEffect(()=>{
      if(!data) return 
  
      localStorage.setItem("pendingAccountsApp", JSON.stringify({value: data.login.value, userLogged: data.login.userLogged}))

      isLogged(true)
      setTimeout(()=>{
        navigate("/")
      }, 4500)
    }, [data])
   
    console.log(data)
  return (
    <div className='px-2'>
        <h1 className='text-[2rem] mt-3  mb-16 font-semibold'>Login</h1>
        {data && <Notification message="Correct! redirect to home" type="resolved"/>}
        {error && <Notification message="Error in login" type="error"></Notification>}
        <Form type="login" mutation={login}/>
    </div>
  )
}

export default Login