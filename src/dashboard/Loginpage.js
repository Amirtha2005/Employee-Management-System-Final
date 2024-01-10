import React, { useState,useMemo } from 'react';
 
import { TextField , Button , Container } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './Loginpage.css';
import { useAuth } from './AuthContext';

const Loginpage = () => {

   const {user, login}=useAuth();

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
                Not a member? <a href="#" onClick={handleLink} disabled={user !== null}>Signup now</a>
             </div>
          </form>
       </div>
     </div>
   );
 };

export default Loginpage;

// import React, { useState,useMemo } from 'react';
// import { TextField , Button , Container } from '@mui/material';
// import {useNavigate} from 'react-router-dom';
// import  axios  from 'axios';
// import './Loginpage.css';

// const Loginpage= () => {

//   const [username, setUsername] = useState('');
//   const handleUsername = (event) => { 
//       setUsername(event.target.value) 
//   }

//   const [password, setPassword] = useState('');
//   const handlePassword = (event) => { 
//       setPassword(event.target.value) 
//   }
//   const navigate=useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.get(`http://localhost:3000/posts?email=${username}&password=${password}`)
//       .then(res=>{
//         if(res.data.length>0)
//         {
//           navigate("/home");
//         }
//         else{
//           alert("User account doesn't exist");
//         }
//       }

//         )

//   };

//   const Navigate=useNavigate();

//   const handleClick=(event)=>{
//     event.preventDefault();
//     Navigate("/dash");
//   }
//   const handleLink=(event)=>
//   {
//     event.preventDefault();
//     Navigate("/Logintosignup");
//   }


//   return (
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

//     <div>
//       <div class="wrapper">
//          <div class="title">
//             Login
//          </div>
//          <form action="#" onSubmit={handleSubmit}>
//             <div class="field">
//                <input type="text" required onChange={handleUsername}></input>
//                <label>Email Address</label>
//             </div>
//             <div class="field">
//                <input type="password" required onChange={handlePassword}></input>
//                <label>Password</label>
//             </div>
//             <div class="content">
//                <div class="checkbox">
//                   <input type="checkbox" id="remember-me"></input>
//                   <label for="remember-me">Remember me</label>
//                </div>
//                <div class="pass-link">
//                   <a href="#">Forgot password?</a>
//                </div>
//             </div>

//             <div class="field">
//                <input type="submit" value="Login" onClick={handleClick}></input>
//             </div>
            
//             <div class="signup-link">
//                Not a member? <a href="#" onClick={handleLink}>Signup now</a>
//             </div>
//          </form>
//       </div>
//     </div>
//   )
// }


// export default Loginpage;

// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Loginpage.css';

// const Loginpage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleUsername = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/posts', {
//         email: username,
//         password: password,
//       });

//       if (response.data) {
//         navigate('/home');
//       } else {
//         alert("User account doesn't exist");
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   const handleClick = (event) => {
//     event.preventDefault();
//     navigate('/dash');
//   };

//   const handleLink = (event) => {
//     event.preventDefault();
//     navigate('/Logintosignup');
//   };

//   return (
//     <div>
//       <div className="wrapper">
//         <div className="title">Login</div>
//         <form action="#" onSubmit={handleSubmit}>
//           <div className="field">
//             <input type="text" required onChange={handleUsername} />
//             <label>Email Address</label>
//           </div>
//           <div className="field">
//             <input type="password" required onChange={handlePassword} />
//             <label>Password</label>
//           </div>
//           <div className="content">
//             <div className="checkbox">
//               <input type="checkbox" id="remember-me" />
//               <label htmlFor="remember-me">Remember me</label>
//             </div>
//             <div className="pass-link">
//               <a href="#">Forgot password?</a>
//             </div>
//           </div>

//           <div className="field">
//             <input type="submit" value="Login" onClick={handleClick} />
//           </div>

//           <div className="signup-link">
//             Not a member? <a href="#" onClick={handleLink}>
//               Signup now
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Loginpage;
