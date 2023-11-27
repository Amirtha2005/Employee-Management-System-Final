import React, { useState,useMemo } from 'react';
import { TextField , Button , Container } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './Loginpage.css';

const Loginpage= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };


  
  const Navigate=useNavigate();
  
  const handleClick=(event)=>{
    event.preventDefault();
    Navigate("/dash");
  }
  const handleLink=(event)=>
  {
    event.preventDefault();
    Navigate("/Logintosignup");
  }



  return (
    // <div className='box'>
    //   <div className='abc'>
    // <Container >

    //   <h1 id='admin'> ADMIN</h1>
    //   <form onSubmit={handleSubmit} >

    //     <TextField variant="outlined" margin="normal" required fullWidth label="USER" onChange={handleUsername}>
    //         {username}
    //     </TextField>

    //     <TextField variant="outlined" margin="normal" required fullWidth label="PASSWORD" type="password" onChange={handlePassword}>
    //         {password}
    //     </TextField>
    //     <br></br>
    //     <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}>
    //       Log In
    //     </Button>
    //     <p><a href='' onClick={handleLink}>register?</a></p>
    //   </form>
    // </Container>
    // </div>
    // </div>

    <div>
      <div class="wrapper">
         <div class="titles">
            Login
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required></input>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required></input>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"></input>
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>

            <div class="field">
               <input type="submit" value="Login" onClick={handleClick}></input>
            </div>
            
            <div class="signup-link">
               Not a member? <a href="#" onClick={handleLink}>Signup now</a>
            </div>
         </form>
      </div>
    </div>
  );
};

export default Loginpage;
