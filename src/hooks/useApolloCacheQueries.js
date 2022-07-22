import { useApolloClient } from "@apollo/client"
import { FIND_ACCOUNT, FIND_USER } from "../graphql/queries"

const useApolloCacheQueries = ({type = "getUser", id}) => {
  const client = useApolloClient()
  if(type === "getUser"){
    const {getUser} = client.readQuery({query: FIND_USER, variables: {id}})
    return getUser
  }else if(type === "findAccount"){
    const {findAccount} = client.readQuery({query: FIND_ACCOUNT, variables: {userSelected: id}})
    return findAccount
  }
}

export default useApolloCacheQueries