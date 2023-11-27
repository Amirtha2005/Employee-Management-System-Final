import React from 'react'
import './Dash.css';
import Graph from './graph';
import Sidebar from './Sidebar';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DomainIcon from '@mui/icons-material/Domain';
import LogoutIcon from '@mui/icons-material/Logout';

const Dashboard = () => {
  return (
    <div>
    <main className='main-container'>
        <Sidebar/>
         <marquee className="marquee" direction="left" width='100%'>on going project</marquee> 
    <div className='main-title'>
      <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards' >

         <div className='card'>
            <div className='card-inner'>
               <h3>EMPLOYEES</h3>
               <GroupsIcon/>
            </div>
         <h1>12</h1>
         </div>
{/* 
         <div className='card'>
            <div className='card-inner'>
               <h3>SALARY</h3>
               <CurrencyRupeeIcon/>
            </div>
         <h1>33</h1>
         </div> */}

         <div className='card'>
            <div className='card-inner'>
               <h3>DEPARTMENT</h3>
               <DomainIcon/>
            </div>
         <h1>300</h1>
         </div>

         <div className='card'>
            <div className='card-inner'>
               <h3>PROJECTS</h3>
            </div>
         <h1>300</h1>
         </div>

         {/* <div className='card'>
            <div className='card-inner'>
               <h3>LEAVE</h3>
               <LogoutIcon/>
            </div>
         <h1>300</h1>
         </div> */}

         <div className='card'>
            <div className='card-inner'>
               <h3>ON GOING PROJECTS</h3>
            </div>
         <h1>300</h1>
         </div>


    </div>
    <br></br><br></br>
    <div className='charts'>
      <div>

      <header>
        <h3>EMPLOYMENT RATE</h3>
      </header>
        <Graph/>
      </div>
    </div>
    </main>
    </div>

  )
}

export default Dashboard;
