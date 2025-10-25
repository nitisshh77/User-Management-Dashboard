import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import DashboardContent from './DashboardContent'


const Dashboard = () => {
  return (
    <div className='maindiv w-full flex'>
        <SideBar/>
        <DashboardContent/>
       
        
    </div>
  )
}

export default Dashboard