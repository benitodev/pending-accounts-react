import React, { useState } from 'react'
import {gql, useMutation} from "@apollo/client"
import { Link } from 'react-router-dom'


const Form = ({type = "register", mutation}) => {
 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()

    mutation({ variables: {username: name, password}})
  }


  return (
 <form className='' onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-[1.3rem]  font-medium text-gray-900 dark:text-gray-300 ">Your name</label>
    <input type="text" id="email" onChange={({target})=> setName(target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name here" required=""/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-[1.3rem] font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password"  onChange={({target})=> setPassword(target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
  </div>
  <div className="flex justify-between  items-center mb-8">
    <div className="flex  items-center h-5">
      <input id="remember" type="checkbox" value="" className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    <label htmlFor="remember" className="ml-2 text-[1rem] font-medium  text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    {type === "register" ?  <p className='text-[1rem] font-medium'>You want to  <Link to="/login" className='font-medium text-lime-600'>log in?</Link></p> : <p className='text-[1rem] font-medium'>create here <Link to="/register" className='font-medium text-lime-600'>register</Link></p>}
   
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </form>

  )
}

export default Form