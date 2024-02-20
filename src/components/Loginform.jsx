import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Loginform() {
    const[userLogin, setuserLogin] = useState({
        phone:"",
        password:""        
    })
    const handleInput = (e) =>{
        const name = e.target.name;
        let value = e.target.value;
        if (name === 'phone') {
            value = value.replace(/\D/g, '');
          }
          if(value.length > 11 ){
            value = value.slice(0,11);
          }
        console.log(name, value);
        setuserLogin({...userLogin, [name]: value})
    }
    const sendOtp = (e) =>{
        e.preventDefault();
        if(userLogin.phone === '' || userLogin.password === ''){
            toast.error('enter you data')   
        }
        else{
            toast.success('login done')
        }
    }
  return (
    <div className='signup'>
        <form action="">
            <h1>welcome...!</h1>
            <input value={userLogin.phone} onChange={handleInput} name='phone' placeholder='phone number' type="phone" />
            <input value={userLogin.password} onChange={handleInput} name='password' placeholder='password' type="password" />
            <input type="submit" onClick={sendOtp}/>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Loginform