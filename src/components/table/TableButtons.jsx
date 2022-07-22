import React, { useState } from 'react'
import Button from '../button/Button'
import Modal from '../modal/Modal'
import { useApolloClient } from '@apollo/client/react'
import { useMutation } from '@apollo/client'
import { FIND_DATA_TO_DELETE_ACCOUNT} from '../../graphql/queries'
import {EDIT_ACCOUNT, ELIMINATE_ACCOUNT} from "../../graphql/mutations"
import FormToEditAccount from '../form/FormToEditAccount'
const TableButtons = ({id}) => {
  const [isModal, setIsModal] = useState(false);
  const client = useApolloClient()
  const {findAccount} = client.readQuery({
    query:FIND_DATA_TO_DELETE_ACCOUNT,
    variables: {
      userSelected: id
    }
  })
  const [eliminateAccount, {data:deleteAccount}] = useMutation(ELIMINATE_ACCOUNT)



  const billToFilter = findAccount[0].bills
  const bills = []
  billToFilter.forEach(obj => {
    Object.keys(obj).filter(prop =>{
      if(prop !== "__typename"){
        bills.push(obj[prop])
      }
    })
  });

  const handleDelete = ()=> {
    eliminateAccount({ variables: {id: findAccount[0].id, billArray: bills, relatedUser: id}})
    }

  return (
    <div className='mt-4'>
      <div onClick={()=> setIsModal(true)} className="inline">
        <Button color="purple" text="Edit" disabled={true}></Button>
      </div>
      {isModal && 
      <Modal setmodal={setIsModal}>
       <FormToEditAccount relatedUser={id}/>
      </Modal>}

      <div onClick={handleDelete} className="inline">
        <Button color="red" text="Delete" disabled={true}></Button>       
      </div>
    </div>
  )
}

export default TableButtons