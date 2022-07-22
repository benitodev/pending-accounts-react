import React from 'react'

const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr className=''>
        <th scope="col" className="pr-6 pl-1 py-3">
           who owes
        </th>
        <th scope="col" className="pr-6 pl-1 py-3">
           how much
        </th>
        <th scope="col" className="pr-6 pl-1 py-3">
            Comments
        </th>
        <th scope="col" className="pr-6 pl-1 py-3">
            Date
        </th>
      
    </tr>
</thead>
  )
}

export default TableHead