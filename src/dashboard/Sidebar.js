import React from 'react'
import './Sidebar.css'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Sidebar() {
  const Navigate= useNavigate();
  const Navi=useNavigate();
  const handleClick=(event)=>
  {
    event.preventDefault();
     Navigate("/toEmployeeForm");
  }

  const handleSidebar=(event)=>{
    event.preventDefault();
    Navi("/Sidebar");
  }
  const handleOut=(event)=>{
    event.preventDefault();
    Navi("/");
  }
  const handleLeave=(event)=>{
    event.preventDefault();
    Navi("/leave");
  }

  
  return (
    <div >
      <div>
      <ul className='navbar'>
        <li>
      <div>
        <input type='checkbox' id='check'></input>
        <label for='check'>
          <i id='btn'><ViewHeadlineIcon/></i>
          <i id='cancel'><CloseIcon/></i>
        </label>
    
      <div className='sidebar'>
      <header>
        <PeopleIcon/>
        Ems
        
      </header>
      <ul>
        <li id='li1'><a href="Sidebar.js" onClick={handleSidebar}>Dashboard</a></li>
        <li id='li2'><a href="EmployeeForm.js" onClick={handleClick}>Add Employee</a></li>
        <li id='li3'><a href="#" > Task Management</a></li>
        <li id='li4'><a href="#" onClick={handleLeave}>Attendance Management</a></li>
        <li id='li4'><a href="#">HR</a></li>
        <li id='li4'><a href="#">Settings</a></li>
        <li id='li4'><a href="#" onClick={handleOut}>LogOut</a></li>
      </ul>
      </div>

      </div>

      </li>
      <li>
        <p id='p'>Ems</p>
      </li>

      <li className='nam'>
        <NotificationsIcon fontSize="large"/>
      </li>

      </ul>

      </div>
       
    </div>
  )
}
