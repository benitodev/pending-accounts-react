import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import TableAccounts from '../components/table/TableAccounts'
import { FIND_ACCOUNT } from '../graphql/queries'

const ViewAccount = () => {
  

   

  return (
    <div className='create-account'>
        <TableAccounts></TableAccounts>
    </div>
//     <div className='create-account'>
//     <h1  className='text-[2rem] mt-3  mb-8 font-semibold'>Subject: car </h1>   
//      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr className=''>
//                 <th scope="col" className="pr-6 pl-1 py-3">
//                    who owes
//                 </th>
//                 <th scope="col" className="pr-6 pl-1 py-3">
//                    how much
//                 </th>
//                 <th scope="col" className="pr-6 pl-1 py-3">
//                     Category
//                 </th>
//                 <th scope="col" className="pr-6 pl-1 py-3">
//                     Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     <span className="sr-only">Edit</span>
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <th scope="row" className="pr-6 pl-1 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
//                    benitoka
//                 </th>
//                 <td className="pr-6 pl-1 py-4">
//                     Sliver
//                 </td>
//                 <td className="pr-6 pl-1 py-4">
//                     Laptop
//                 </td>
//                 <td className="pr-6 pl-1 py-4">
//                     $2999
//                 </td>
//                 <td className="pr-6 pl-1 py-4 text-right">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>

//     </div>
  )
}

export default ViewAccount