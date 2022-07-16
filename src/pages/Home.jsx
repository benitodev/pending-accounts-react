import React from 'react'
import {useQuery} from "@apollo/client"
import UserLogic from '../components/users/UserLogic'
import { Link } from 'react-router-dom'
import {BiLoaderCircle} from "react-icons/bi"
import { ALL_USERS } from '../graphql/queries'
import LogoutButton from '../components/button/LogoutButton'



const Home = () => {
    const result = useQuery(ALL_USERS)
    const {data, loading} = result
  return (
    <div className="home">
        <p className='text-[1.2rem] text-slate-500'>Hello you're not authenticated.  
        <span className='block'>
        <Link to="/register" className='text-links font-semibold'>register</Link> or <Link to="/login" className='text-links font-semibold'>login</Link>
        </span>
        </p>
        <h1 className='text-[2rem] mt-3 mb-1.5 font-semibold'>All users</h1>
        <p className='mb-2 text-gray-600'>To make an account with any of these</p>
       
       {
        loading ? <div className='flex w-full h-40 justify-center items-center '><BiLoaderCircle className='w-16 h-16'/></div> : <UserLogic data={data}/>
        }
       <LogoutButton></LogoutButton>
    </div>
  )
}

export default Home