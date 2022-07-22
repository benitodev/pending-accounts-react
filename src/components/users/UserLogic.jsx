import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { userLogged } from '../../graphql/cache'
import User from './User'

const UserLogic = ({data}) => {
  const user = useReactiveVar(userLogged)
  //filter user logged in home
  const users = data?.allUsers.filter((u) => u.username !== user) || data?.allUsers
  return (
    <div className='container mx-auto mt-8'>
        <ul className='grid grid-cols-1 gap-3'>
         {users?.map(user => <User key={user.id} user={user}/> )}
        </ul>
    </div>
  )
}

export default UserLogic