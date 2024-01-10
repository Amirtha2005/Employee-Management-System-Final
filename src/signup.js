// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {useNavigate} from 'react-router-dom';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}w
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
  
//   const Navigate=useNavigate();
//   const handleClick=(event)=>
//   {
//     event.preventDefault();
//     Navigate('/login');
//   }

//   return (
   

//     <div>
//       <div>
//       <div class="wrapper1">
//          <div class="titles">
//             Sign Up
//          </div>
//          <form action="#">
//             <div class="field">
//                <input type="text" required></input>
//                <label>Name</label>
//             </div>
//             <div class="field">
//                <input type="text" required></input>
//                <label>Email Address</label>
//             </div>
//             <div class="field">
//                <input type="password" required></input>
//                <label>Password</label>
//             </div>
//             <div class="field">
//                <input type="password" required></input>
//                <label>Confirm Password</label>
//             </div>
//             <div class="content">
//                <div class="checkbox">
//                   <input type="checkbox" id="remember-me"></input>
//                   <label for="remember-me">Accept Terms and Conditions</label>
//                </div>
               
//             </div>
//             <div class="field">
//                <input type="submit" value="SignUp" onClick={handleClick}></input>
//             </div>
//             <div class="signup-link">
//                Already have an account? <a href="#" onClick={handleClick}>Log In</a>
//             </div>
//          </form>
//       </div>
//     </div>
//     </div>

//   );
// }



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
   const Navigate=useNavigate();
   const handleClick=()=>
   {
      Navigate('/login');
   }
   const [name,setName]=useState(" ");
   const [email,setemail]=useState(" ");
   const [password,setpassword]=useState(" ");
   const [conformpass,setconformpass]=useState(" ");
   const handleName=(e)=>{setName(e.target.value)}
   const handleEmail=(e)=>{setemail(e.target.value)}
   const handlePassword=(e)=>{setpassword(e.target.value)}
   const handleCPassword=(e)=>{setconformpass(e.target.value)}
   const userdata={
      name:name,
      email:email,
      password:password,
      conformpassword:conformpass
   }
   console.log('User Data:', userdata);

   const handleSubmit=async(e)=>
   {
       e.preventDefault();
       await axios.post(`http://localhost:3000/posts`,userdata)
       .then((res)=>{console.log(res.data);Navigate('/Login')})
       .catch((err)=>{
           console.log("Something went wrong"+err);
       })
   }   
  return (
    <div>
      <div>
      <div class="wrapper1">
         <div class="title">
            Sign Up
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required onChange={handleName}></input>
               <label>Name</label>
            </div>
            <div class="field">
               <input type="text" required onChange={handleEmail}></input>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required onChange={handlePassword}></input>
               <label>Password</label>
            </div>
            <div class="field">
               <input type="password" required onChange={handleCPassword}></input>
               <label>Confirm Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"></input>
                  <label for="remember-me">Accept Terms and Conditions</label>
               </div>  
            </div>
            <div class="field">
               <input type="submit" value="SignUp" onClick={handleSubmit}></input>
            </div>
            <div class="signup-link">
               Already have an account? <a href="#" onClick={handleClick}>Log In</a>
            </div>
         </form>
      </div>
    </div>
    </div>
   );
}