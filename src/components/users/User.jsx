import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import FormToCreateAccount from '../form/FormToCreateAccount'
import Modal from '../modal/Modal'
import {useMutation, useReactiveVar } from '@apollo/client'
import { isLoggedInVar } from '../../graphql/cache'
import { CREATE_ACCOUNT } from '../../graphql/mutations'
const User = ({user}) => {
  const [accountMutation, {data, loading, error}] = useMutation(CREATE_ACCOUNT)
  const [isModal, setIsModal] = useState(false);
  const bool = useReactiveVar(isLoggedInVar) 

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
      <Modal setModal={setIsModal}>
       <FormToCreateAccount user={user} setModal={setIsModal} accountData={data} createAccountMutation={accountMutation}/>
      </Modal>}
    </section>
    </div>
  )
}

export default User