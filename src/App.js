// src/App.js
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import EmployeeForm from './dashboard/EmployeeForm';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import SignUp from './signup';
import Loginpage from './dashboard/Loginpage';
import HomePage from './dashboard/HomePage';
import Home from './dashboard/Home';
import Pricing from './Pricing';
import Dashboard from './dashboard/Dash';
import Salary from './dashboard/Leave';
import Form from './dashboard/Form';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        
         <Route path="/" element={<Home/>}></Route>
         <Route path="/price" element={<Pricing/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/login" element={<Loginpage/>}></Route>
         <Route path="/Logintosignup" element={<SignUp/>}></Route>
          <Route path="/dash" element={<Dashboard/>}></Route> 
          <Route path="/toEmployeeForm" element={<Form/>}></Route>
          <Route path="/leave" element={<Salary/>}></Route>
         <Route path="/Sidebar" element={<Dashboard/>}></Route>
       </Routes>
  </BrowserRouter>
    );
  };


export default App;
