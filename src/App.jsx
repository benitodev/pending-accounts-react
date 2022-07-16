import {Route, Routes, Navigate} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import ViewAccount from "./pages/ViewAccount"
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'


function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/view/:id" element={<ViewAccount/>}/>
      </Routes>
    </div>
  )
}

export default App
