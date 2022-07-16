import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"

const useCreateUser = ()=>{
    const [createUser, {loading, data, error, reset}] = useMutation(CREATE_USER)

    return {createUser, loading, data, error, reset }
}
export default useCreateUser