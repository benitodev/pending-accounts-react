import { useMutation } from "@apollo/client"
import { EDIT_ACCOUNT, EDIT_BILL } from "../graphql/mutations"


const useEditTable = (setMoney, money, findAccount) => {
  
    const [editBill, {data: updateBill}] = useMutation(EDIT_BILL)
    const [editAccount, {data:updateAccount}] = useMutation(EDIT_ACCOUNT)
    const {bills} = findAccount[0]

    const handleClick = () => {
        editAccount({variables: {id: findAccount[0].id, name: subject}})
        if(setMoney !== 0){
          editBill({variables: {id: bills[0].id, amount: money}})
        }
      } 

    return {handleClick}
}

export default useEditTable