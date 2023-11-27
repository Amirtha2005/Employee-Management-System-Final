import React from 'react'
import './Pricing.css';
import {useNavigate} from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Pricing() {

    const Navigate=useNavigate();

    const handleHome=(event)=>
    {
      event.preventDefault();
      Navigate("/home");
    }

  return (
    <div>


      <div className='fir'>
      <a href="#" onClick={handleHome}><p>HOME</p>  </a>
      </div>

      <div className='Start'>
      <h1>Start your 15-day free trial with all features.</h1><br></br>
      <p>No credit card required</p>
      </div>

      <div className='tab'>
      
      <div className='mini'>
  
      <h3>MINI</h3><br></br>
      <h4>Upto 5 Employees</h4>
      <p>₹0/ month</p>
      <button style={{backgroundColor:'lightgreen'}}>FREE TRIAL</button>
      </div>
      

      <div className='small'>
      <h3>SMALL</h3><br></br><h4>Upto 10 Employees</h4>
      <p>₹749 / month</p>
      <button style={{backgroundColor:'lightgreen'}}>BUY NOW</button>
      </div>

      <div className='medium'>
      <h3>MEDIUM</h3><br></br><h4>Upto 30 Employees</h4>
      <p>₹1749 / month</p>
      <button style={{backgroundColor:'lightgreen'}}>BUY NOW</button>
      </div>

      <div className='large'>
      <h3>LARGE</h3><br></br><h4>Upto 50 Employees</h4>
      <p>₹2749 / month</p>
      <button style={{backgroundColor:'lightgreen'}}>BUY NOW</button>
      </div>

      </div>

      <div className='foot'>
        
      <div className="footerlinks">
          <a href="#"><p>Privacy</p></a>
          <a href="#"><p>Terms</p></a>
          <a href="#"><p>Cookies Policy</p></a>
          <a href="#"><p>Cookies Settings</p></a>
        </div>

      <div className="footerlinks1">
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>More Industries</p></a>
          <a href="#"><p>Field Services</p></a>
          <a href="#"><p>Help Center</p></a>
        </div>

      <div className="footerlinks2">
          <a href="#"><p>Whatsapp</p></a>
          <a href="#"><p>Email</p></a>
          <a href="#"><p>Contact Details</p></a>
          <a href="#"><p>Cookies Settings</p></a>
        </div>


        <div className="socialicons">
     
            <p><GoogleIcon/></p>
           <p><FacebookIcon/></p> 
            <p><LinkedInIcon/></p>
            <p><TwitterIcon/></p>
        </div>

      </div>



    </div>
  )
}