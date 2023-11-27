import React from 'react';
import './Leave.css';
import Sidebar from './Sidebar';

import {useNavigate} from 'react-router-dom';

export default function Salary() {

  const Navigate=useNavigate();

  const handleClick=(event)=>
  {
    event.preventDefault();
    Navigate('/Sidebar');
    alert("submitted")
  }

  return (
//     <div>

//       <Sidebar/>

//       <div className='salaryfro'>
//       <h1>Employee Salary Details</h1>
//       <br></br>
//       </div>

//       <div className='salaryf'>

//       <table>
//       <tr>
//       <td><label for='yaa'>Name</label></td>
//       <td><label for='ybb'>ID</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' placeholder='Enter your Name' id='yaa' className='aaa111'/></td>
//       <td><input type='text' placeholder='Enter your ID' id='ybb' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='ycc'>Department</label></td>
//       <td><label for='ydd'>Grade Name</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='ycc' placeholder='Enter your department' className='aaa111'/></td>
//       <td><input type='text'id='ydd' placeholder='Enter your grade name' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='yee'>Employee Salary Year</label></td>
//       <td><label for='yff'>Employee Salary Month</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='yee' placeholder='Enter Year' className='aaa111'/></td>
//       <td><input type='text'id='yff' placeholder='Enter Month' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='yhh'>Basic</label></td>
//       <td><label for='ygg'>HRA</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='yhh' className='aaa111'/></td>
//       <td><input type='text'id='ygg' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='yii'>DA</label></td>
//       <td><label for='yjj'>TA</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='yii' className='aaa111' /></td>
//       <td><input type='text'id='yjj' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='ykk'>Medical Allowance</label></td>
//       <td><label for='yll'>Bonus</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='ykk' className='aaa111'/></td>
//       <td><input type='text'id='yll' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='ymm'>Provident Fund</label></td>
//       <td><label for='ynn'>Gross</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='ymm' className='aaa111'/></td>
//       <td><input type='text'id='ynn' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><label for='yoo'>Proffesion Tax</label></td>
//       <td><label for='ypp'>Net Salary</label></td>
//       </tr>
//       <tr>
//       <td><input type='text' id='yoo' className='aaa111'/></td>
//       <td><input type='text'id='ypp' className='aaa111'/></td>
//       </tr>
//       <tr>
//       <td><button onClick={handleClick}>SUBMIT</button></td>
//       <td><button>CLEAR</button></td>
//       </tr>
//       </table>
//     </div>
//     </div>


<div>
<Sidebar/>
<div className='bod'>

<section class="container">
<header>SALARY DETAILS</header>

<form action="#" class="form">

<div class="column">
    <div class="input-box">
      <label>First Name</label>
      <input type="text" placeholder="Enter First Name" required />
    </div>

    &nbsp; &nbsp;
    <div class="input-box">
      <label>Second Name</label>
      <input type="text" placeholder="Enter Second Name" required />
    </div>
  </div>

  <div class="input-box">
    <label>Employee ID</label>
    <input type="text" placeholder="Enter first name" required />
  </div>


  <div class="input-box">
    <label>Email Address</label>
    <input type="text" placeholder="Enter email address" required />
  </div>

  <div class="column">
    <div class="input-box">
      <label>Phone Number</label>
      <input type="number" placeholder="Enter phone number" required />
    </div>

    &nbsp; &nbsp;
    <div class="input-box">
      <label>Birth Date</label>
      <input type="date" placeholder="Enter birth date" required />
    </div>
  </div>
  
  <div class="input-box">
    <label>Department</label>
    <input type="text" placeholder="Enter your Department" required />
  </div>
  
  <div class="input-box">
    <label>Salary in LPA</label>
    <input type="text" placeholder="" required />
  </div>
  
  <div class="input-box">
    <label>Basic</label>
    <input type="text" placeholder="" required />
  </div>
  
  <div class="input-box">
    <label>HRA</label>
    <input type="text" placeholder="" required />
  </div>
  
  <div class="input-box">
    <label>DA</label>
    <input type="text" placeholder="" required />
  </div>
  
  <div class="input-box">
    <label>Medical Allowance</label>
    <input type="text" placeholder="" required />
  </div>
  
  <div class="input-box">
    <label>Bonus</label>
    <input type="text" placeholder="" required />
  </div>

  <div class="input-box">
    <label>Experience</label>
    <input type="text" placeholder="Enter your past Experience" required />
  </div>

  <div class="gender-box">
    <h3>Gender</h3>
    <div class="gender-option">
      <div class="gender">
        <input type="radio" id="check-male" name="gender" checked />
        <label for="check-male">male</label>
      </div>
      <div class="gender">
        <input type="radio" id="check-female" name="gender" />
        <label for="check-female">Female</label>
      </div>
      <div class="gender">
        <input type="radio" id="check-other" name="gender" />
        <label for="check-other">prefer not to say</label>
      </div>
    </div>
  </div>

  <button onClick={handleClick}>Submit</button>
</form>

</section>

</div>
</div>
  )
}
