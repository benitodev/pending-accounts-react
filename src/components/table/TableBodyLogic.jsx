import React from 'react'
import TableBody from './TableBody'

const TableBodyLogic = ({account}) => {
    
  return (
    <>
    {
        account.bills.map((bill)=> 
        { 
        const localTime = new Date(bill.createdAt)
        return <TableBody key={bill.id} mainTh={bill.howOwes}>
         <td className="pr-6 pl-1 py-4">
          {bill.amount}
         </td>
         <td className="pr-6 pl-1 py-4">
          Laptop
         </td>
         <td className="pr-6 pl-1 py-4">
          {localTime.toLocaleDateString()}
         </td>
       </TableBody>
       }
      )}
  </>
  )
}

export default TableBodyLogic