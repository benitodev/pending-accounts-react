import React, { useEffect } from 'react'

import { CREATE_ACCOUNT, CREATE_BILL } from '../../graphql/mutations'
import { useMutation } from '@apollo/client'

import Checkbox from './Checkbox'
import useForm from '../../hooks/useForm'


const FormToCreateAccount = ({user, setmodal}) => {
 
  const [createAccount, {data:accountData}] = useMutation(CREATE_ACCOUNT)
  const [createBill, result] = useMutation(CREATE_BILL)

  const {subject, money, comments, checkbox, setSubject, setMoney, setComments, setCheckbox} = useForm()

  const handleClick = () => {
    createAccount({variables:{name: subject, chosenUser: user.id}})
    setTimeout(()=>{
      setmodal(false)
    }, 2000)
  }


  useEffect(()=>{
    if(!accountData) return
    const account = accountData.createAccount.id
    createBill({variables: {amount: money, account, howOwes: checkbox}})
  }, [accountData])

  return (
    <div>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Complete the data</h3>
        <div className="space-y-6" >
        <div>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write the subject</label>
            <input onChange={({target})=> setSubject(target.value)} type="text" name="subject"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: pay the car" required=""/>
        </div>
        <Checkbox setCheckbox={setCheckbox} username={user.username}/>
        <div>
            <label htmlFor="money" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">how much?</label>
            <input onChange={({target})=> setMoney(parseInt(target.value))} type="text" name="money" placeholder="ex: 450$" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
        <div >
        <label htmlFor="how-much" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add comments</label>
           <textarea onChange={({target})=> setComments(target.value)} id="comment" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: since the last year you owe me money" required></textarea>
       </div>
        
        <button onClick={handleClick} type="submit" className="w-full text-white bg-links hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
     </div>
    </div>
  )
}

export default FormToCreateAccount