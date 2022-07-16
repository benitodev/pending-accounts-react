import React from 'react'
import { useApolloClient } from '@apollo/client'
import { ALL_USERS } from '../../graphql/queries'
import useCheckboxDisabled from '../../hooks/useCheckboxDisabled'
const Checkbox = ({setCheckbox, username}) => {
    const client = useApolloClient()
    const {state, ref} = useCheckboxDisabled(setCheckbox)
    const {setCheckbox1, setCheckbox2, checkbox1, checkbox2} = state
    const {checkboxRef1, checkboxRef2} = ref

    const handleChangeWhoOwes = (user) =>{
      setCheckbox(user)
    }
  return (
    <div>
    <label htmlFor="how-ows" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">check who owes money</label>
    <div className='flex justify-around'>
        <div className='flex items-center'>
          <span className='text-base marg mr-2'>me</span>
          <input onChange={()=> handleChangeWhoOwes("me")} name="me" ref={checkboxRef1} onClick={()=>{setCheckbox1(!checkbox1)}} type="checkbox" id="password" placeholder="••••••••" className=" accent-links bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required=""/>
        </div>
        
        <div className='flex items-center'>
          <span className='text-base marg mr-2'>{username}</span>
          <input onChange={()=> handleChangeWhoOwes(username)} ref={checkboxRef2} onClick={(e)=>{setCheckbox2(!checkbox2)}} type="checkbox" name="" id="password" placeholder="••••••••" className="accent-links bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
    </div>
</div>
  )
}

export default Checkbox