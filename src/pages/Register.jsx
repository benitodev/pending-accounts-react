import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/form/Form'
import Notification from '../components/message/Notification'
import useCreateUser from '../hooks/useCreateUser'
import useReset from '../hooks/useReset'

const Register = () => {
  const {createUser, loading, data, error, reset} = useCreateUser()
  const resetMutation = useReset(reset, data, error)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!data) return
    setTimeout(()=>{
      navigate("/login")
    }, 5000)
  }, [data])

  return (
    <div className='px-2'>
     <h1 className='text-[2rem] mt-3  mb-16 font-semibold'>Register</h1>  
     {loading && <p>Loading...</p> } 
     {data && <Notification message="Your account is already created. Welcome!" type="resolved"/>}
     {error && <Notification message="Error in create user" type="error"></Notification>}
     <Form type="register" mutation={createUser}/>
    </div>
  )
}

export default Register