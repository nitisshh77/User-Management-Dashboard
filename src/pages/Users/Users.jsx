import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import './Users.css'
import UserList from '../UserList/UserList'


const Users = () => {
  return (
    <div className='main flex gap-20'>
      
        <SideBar/>
        <div className='user flex flex-col gap-2'>

         <h1 className='text'>User Management.</h1>

          <div className="user-list">

            <UserList/>

        </div>

         
         
         
        </div>
        
    </div>
  )
}

export default Users