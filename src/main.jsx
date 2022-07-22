import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApolloClient,  ApolloProvider, HttpLink} from "@apollo/client"
import {BrowserRouter as Router} from "react-router-dom"
import {cache} from "./graphql/cache"

const token = JSON.parse(localStorage.getItem("pendingAccountsApp"))?.value 

const client = new ApolloClient({
  connectToDevTools:true,
  cache,
  link: new HttpLink({
    headers:{
      authorization: token ? "bearer ".concat(token) : null 
    },
    uri: "https://pending-accounts.herokuapp.com/graphql",
  }),
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Router>
    <App />
    </Router>
  </ApolloProvider>
)
