import React from 'react'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { EDIT_ACCOUNT, EDIT_BILL } from '../../graphql/mutations'
import useApolloCacheQueries from '../../hooks/useApolloCacheQueries'
import Checkbox from './Checkbox'
import useEditTable from '../../hooks/useEditTable'
import useForm from '../../hooks/useForm'

const FormToEditAccount = ({relatedUser}) => {
  const {subject, money, comments, checkbox, setSubject, setMoney, setComments, setCheckbox} = useForm()
  const getUser = useApolloCacheQueries({type: "getUser", id: relatedUser})
  const findAccount = useApolloCacheQueries({type: "findAccount", id: relatedUser})
  const {handleClick} = useEditTable(setMoney, money, findAccount)
  
  const {bills} = findAccount[0]


  return (
    <div>
    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit the 
      data</h3>
      <div className="space-y-6" >
      <div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write the subject</label>
          <input onChange={({target})=> setSubject(target.value)} placeholder={findAccount[0].name} type="text" name="subject"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
      </div>
      <Checkbox setCheckbox={setCheckbox} username={getUser.username} howOwesDefault={bills[0].howOwes}/>
      <div>
          <label htmlFor="how-much" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">how much?</label>
          <input onChange={({target})=> setMoney(parseInt(target.value))} placeholder={bills[0].amount} type="text" name="how-much" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
      </div>
      <div >
      <label htmlFor="how-much" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add comments</label>
         <textarea onChange={({target})=> setComments(target.value)} value={""} id="comment" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: since the last year you owe me money" required></textarea>
     </div>
      
      <button onClick={handleClick} type="submit" className="w-full text-white bg-links hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
   </div>
  </div>
  )
}

export default FormToEditAccount