import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { FIND_ACCOUNT } from '../../graphql/queries'
import TableBody from './TableBody'

const TableAccounts = () => {
    const params = useParams()
    const accounts = useQuery(FIND_ACCOUNT, {
        variables: {userSelected: params.id}
    })
    console.log(accounts)
  return (
    <div>
      {accounts.data?.findAccount.map((account)=> 
       <>
        <h1  className='text-[2rem] mt-3  mb-8 font-semibold'>Subject: {account.name} </h1>   
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr className=''>
                   <th scope="col" className="pr-6 pl-1 py-3">
                      who owes
                   </th>
                   <th scope="col" className="pr-6 pl-1 py-3">
                      how much
                   </th>
                   <th scope="col" className="pr-6 pl-1 py-3">
                       Category
                   </th>
                   <th scope="col" className="pr-6 pl-1 py-3">
                       Price
                   </th>
                   <th scope="col" className="px-6 py-3">
                       <span className="sr-only">Edit</span>
                   </th>
               </tr>
           </thead>
           <TableBody mainTh="benitoka">
             <td className="pr-6 pl-1 py-4">
              {account.bills[0].amount}
             </td>
             <td className="pr-6 pl-1 py-4">
              Laptop
             </td>
             <td className="pr-6 pl-1 py-4">
              $2999
             </td>
           </TableBody>

       </table>
       </div>    
       </>
      )}
    </div>
  )
}

export default TableAccounts