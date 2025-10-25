import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from './components/SideBar/SideBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Users from './pages/Users/Users';
import UserList from './pages/UserList/UserList';
import UserDetails from './pages/UserDetails/UserDetails';
import AddUser from './pages/AddUser/AddUser';


const App = () => {
  return (
    <Router>

      <div>
        
      </div>

      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails/>} />
        <Route path="/adduser" element={<AddUser/>} />
      </Routes>

    </Router>
  )
}

export default App
