import { useQuery } from '@apollo/client'
import React from 'react'
import { FIND_USER } from '../../graphql/queries'
import ViewAccount from '../../pages/ViewAccount'

const TableBody = ({mainTh, children}) => {
  const {data:userThatOwes} = useQuery(FIND_USER, {
    variables: {id: mainTh}
  })
  return (
    <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="pr-6 pl-1 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
           {userThatOwes?.getUser.username}
        </th>
          {children}
    </tr>
</tbody>
  )
}

export default TableBody