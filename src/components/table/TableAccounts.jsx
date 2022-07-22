import ReactV, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { FIND_ACCOUNT } from '../../graphql/queries'
import TableBody from './TableBody'
import TableHead from './TableHead'
import TableButtons from './TableButtons'
import TableBodyLogic from './TableBodyLogic'


const TableAccounts = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {data: accounts} = useQuery(FIND_ACCOUNT, {
        variables: {userSelected: params.id}
    })
    useEffect(()=>{
      if(accounts?.findAccount?.length === 0) {
        navigate("/")
      }
    }, [accounts])
  return (
    <div>
      {accounts?.findAccount.map((account)=> 
      <article key={account.id}>
        <h1  className='text-[2rem] mt-3  mb-8 font-semibold'>Subject: {account.name} </h1>   
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <TableHead></TableHead>
           <TableBodyLogic account={account}/>
          
       </table>
       </div>
      <TableButtons id={params.id}/>
      </article>
      )}
    </div>
  )
}

export default TableAccounts