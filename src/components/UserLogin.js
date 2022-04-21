import React,{useState} from 'react';
// based on login --> redirect user to UserDashboard or AdminDashboard
import axios from 'axios';
import base_url from '../api/apiURL';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
// import Cookies from 'js-cookie';
const UserLogin = () => {
  const [userid,setUserId]=useState('');
  const [pass,setPass]=useState('');
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    let config={
      url:`${base_url}/user/userLogin/${userid}`,
      method:'get',

    }
    axios(config)
    .then((resp)=>{
      console.log(resp);
      let d=resp.data;

      if(d&&d.userType==='ADMIN')
    {
      // Cookies.set('username',d.name);
      // Cookies.set('usertype','admin')
      navigate("/AdminDashboard");
    }
    else if(d&&d.userType===null)
    {
      // Cookies.set('username',d.name);
      // Cookies.set('usertype','customer');
      navigate("/UserDashboard");
    }
    })
    
    .catch(err=>{
      toast.error('Invalid credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  }
  const handleChange=(e)=>{
    if(e.target.name==='userId')
    {
      setUserId(e.target.value);
      
    }
    if(e.target.name==='password')
    {
      setPass(e.target.value);
    }
  }
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={handleLogin}>
          <input
              type='text'  
              name='userId'
              id='userId'
              placeholder='UserId'
              value={userid}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              value={pass}
              placeholder='Password'
              onChange={handleChange}
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  ) 
}

export default UserLogin;