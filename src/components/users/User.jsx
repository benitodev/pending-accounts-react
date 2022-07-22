import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {useReactiveVar } from '@apollo/client'
import { isLogged } from '../../graphql/cache'

import FormToCreateAccount from '../form/FormToCreateAccount'
import Button from '../button/Button'
import Modal from '../modal/Modal'

const User = ({user}) => {
  const [isModal, setIsModal] = useState(false);
  //check if the current user is logged to create and view other users
  const bool = useReactiveVar(isLogged) 

  return (
    <div className='flex justify-between'>
    <li key={user.id} className='flex my-2'>{user.username}</li>
    <section className="flex">

    <Link to={`/view/${user.id}`}>
    <Button text="view" disabled={bool}/>
    </Link>

    <article onClick={()=>{setIsModal(true)}}>
    <Button color="purple" text="create" disabled={bool}/>
    </article>

    {isModal && 
      <Modal setmodal={setIsModal}>
       <FormToCreateAccount user={user} setmodal={setIsModal}/>
      </Modal>}
    </section>
    </div>
  )
}

export default User