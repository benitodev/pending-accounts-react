import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { FIND_USER } from "../graphql/queries";

//find user that owes to put checked in checkbox

const useHowOwesCheckbox =(howOwesDefault)=>{
    const client = useApolloClient()
    const [howOwes, setHowOwes] = useState(false);

    useEffect(()=>{
      if(!howOwesDefault) return
      const howOwesQuery = client.readQuery({query: FIND_USER, variables: {id: howOwesDefault}})
      setHowOwes(howOwesQuery.getUser?.username)
      console.log(howOwes)
    }, [howOwesDefault])

    return howOwes
}
export default useHowOwesCheckbox