import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import DashboardContent from './DashboardContent'
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColorModeContext } from "../../context/ThemeContext";


const Dashboard = () => {
  return (
    <div className='maindiv w-full flex'>
        <SideBar/>
        <DashboardContent/>
       
        
    </div>
  )
}

export default Dashboard