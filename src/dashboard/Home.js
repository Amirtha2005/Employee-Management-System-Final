import React from 'react'
import "./Home.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from 'react-router-dom';
export default function Home() {

  const Navigate=useNavigate();

  const handlePrice=(event)=>
  {
    event.preventDefault();
    Navigate("/price");
  }
  
  const handleLogin=(event)=>
  {
    event.preventDefault();
    Navigate("/Logintosignup");
  }

  return (
    <div>
      <div className='navbar'>
   <h1>EMS</h1>
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#"><p onClick={handlePrice}>PRICING</p> </a>
      &nbsp; &nbsp; &nbsp;
      <a href="#"><p onClick={handleLogin}>SIGN IN </p>  </a>
      &nbsp;&nbsp;&nbsp;&nbsp;

      </div>

      <div className='title'>
      <div className='emp'>
      <h1>Employee Management</h1>
      </div>

      <br></br>
      <div className='para'>
      "The way to get started is to quit talking and begin doing.Let no feeling of discouragement prey upon you, and in the end you are sure to succeed."
      </div>


      </div>

      <div className='content'>

<div className='why'>
  <h1>Why is an employee management system important?</h1><br></br><br></br>
  <p>Employee management systems are important because a business’s workforce is its greatest asset. Yet, despite this intrinsic value, employee engagement is sometimes overlooked because HR professionals are either too busy with administrative work or lack the integrations necessary to use their people data effectively. Technology can alleviate such burdens and afford employers more time to connect with workers and create strategic initiatives that will attract and retain talent.
  When employers choose to outsource their responsibilities to a third party, it’s sometimes referred to as employee management services. This arrangement is often beneficial for small and midsized businesses who have limited HR departments, lack compliance expertise or want to offer employee benefits comparable to those commonly available at larger organizations. Reducing the amount of time and resources spent on employee management also affords business owners the ability to focus more attention on growing their operations.
  </p>
</div>

<div className='pic'>
<img src="https://tse2.mm.bing.net/th?id=OIP.CO2nkj6Est5du2k66CwDnwHaE8&pid=Api&P=0&h=180" ></img>
</div>

      </div>

      

      <div className='content'>

<div className='pic1'>
<img src="https://tse4.mm.bing.net/th?id=OIP.TkXyCavSupGlZbwobPB_sAHaHF&pid=Api&P=0&h=180" ></img>
</div>
<div className='why'>
  <h1>Collaborate in one shared workspace</h1><br></br><br></br>
  <p>Easily coordinate with other hiring managers and make the right personnel decisions more quickly. Use data to assess and track employee performance, fetch their feedback using integrated forms.
    
  </p>
</div>


      </div>


      <div className='content'>
        
<div className='why'>
  <h1>Connect with your go-to tools</h1><br></br><br></br>
  <p>Linkedin, Typeform, email, calendar, Surveymonkey, and much more.
bring your data from multiple tools into monday.com and finally
have all your team’s work in one place.
  </p>
</div>

<div className='pic1'>
<img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/floating-integrations/github.png" ></img>
</div>


      </div>


      <div className='clie'>
      <h2>Our Happy Clients</h2>
      </div>
      <div className='client'>
          <img src='https://innbuilt.com/themes/custom/corp/assets/images/clients/excel_logo.png' width='25%' height='25%'/>
          <img src='https://innbuilt.com/themes/custom/corp/assets/images/clients/client_logo_1.png' width='20%' height='25%'/>
          <img src='https://innbuilt.com/themes/custom/corp/assets/images/clients/client_logo_2.png' width='20%' height='25%'/>
          <img src='https://innbuilt.com/themes/custom/corp/assets/images/clients/silvan-logo.png' width='20%' height='25%'/>
          </div>
          <div className='features'>
          <h2>Features & Benefits</h2>
          </div>
          <div className='benefits'>
          <div className='att'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/smartphone.png' width='25%' height='25%'/>
          <h3>Mobile Attendance</h3>
          <p>Mobile GPS based check-in with selfie helps employees working remotely to check-in and checkout from their mobile.</p>
          </div>
          <div className='track'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/tracking.png' width='25%' height='25%'/>
          <h3>Live Attendance Tracking</h3>
          <p>View the live status of your employees who performed check-in / check-out from various locations.</p>
          </div>
          <div className='leave'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/smartphn.png' width='25%' height='25%'/>
          <h3>Easy Leave Management</h3>
          <p color='gray'>Define various leave types and customise them to fit your specific company needs.</p>
          </div>
      </div>
          <div className='secbenefits'>
          <div className='free'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/user-interface.png' width='25%' height='25%'/>
          <h3>Mobile App for Employees</h3>
          <p>InnBuilt HRMS App is available for both Android & Apple iOS mobile devices.</p>
          </div>
          <div className='report'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/mobile-app.png' width='25%' height='25%'/>
          <h3>Wide range of Reports</h3>
          <p>Easily generate and download a wide range of reports within seconds.</p>
          </div>
          <div className='store'>
          <img src='https://innbuilt.com/sites/default/files/inline-images/mobile%20%281%29.png' width='25%' height='25%'/>
          <h3>Document Storage & Expiry Tracking</h3>
          <p>Store employee documents securely and track expiry of documents with alerts.</p>
          </div>
      </div>
      <div className='awards'>
      <h2>Recognitions</h2>
      </div>
      <div className='rec'>
        <div>
        <img src='data:image/png;base64,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' width='60%' height='80%'/>
        </div>
        <div >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTu85U2ugYhXdOL_abBqAGSc7G38WnnEAkBWtV6POIZYxBAXchzgQWEuG0zbHJaAsMVs&usqp=CAU' height='60%' width='50%'/>
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