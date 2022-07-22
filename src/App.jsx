import {Route, Routes, Navigate} from "react-router-dom"

import { useReactiveVar } from "@apollo/client"
import { isLogged } from "./graphql/cache"

import Navbar from './components/navbar/Navbar'
import ViewAccount from "./pages/ViewAccount"
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'


function App() {
  const userLogged = useReactiveVar(isLogged)
  console.log(userLogged)
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/profile" element={userLogged ? <Profile/> : <Navigate to="/"/>}/>
        <Route path="/view/:id" element={userLogged ? <ViewAccount/> : <Navigate to="/"/>}/>
      </Routes>
    </div>
  )
}

export default App
