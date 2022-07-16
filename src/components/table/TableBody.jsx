import React from 'react'

const TableBody = ({mainTh, children}) => {
  return (
    <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="pr-6 pl-1 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
           {mainTh}
        </th>
          {children}
        <td className="pr-6 pl-1 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
</tbody>
  )
}

export default TableBody