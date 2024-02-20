import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function Signup() {
    const [userSignup, setuserSignup] = useState({
        name:"",
        phone:"",
        password:"",
        confirm_password:"",
    }); 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setuserSignup({...userSignup, [name]: value})       
    } 
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(userSignup.name === '' || userSignup.phone === '' || userSignup.password === '' || userSignup.confirm_password != userSignup.password){
            toast.error('enter the data')
        }else{
            toast.success('registration done')
        }
    }
  return (
    <>
    <div className='signup'>
        <form action="">
            <input name='name' value={userSignup.name} onChange={handleInput} placeholder='name' type="text"/>
            <input name='phone' value={userSignup.phone} onChange={handleInput} placeholder='phone number' type="text" />
            <input name='password' value={userSignup.password} onChange={handleInput} placeholder='password' type="password" />
            <input name='confirm_password' value={userSignup.confirm_password} onChange={handleInput} placeholder='conferm password' type="password" />
            <input className="mt-3" type="submit" onClick={handleSubmit} />
        </form>
        <ToastContainer />
    </div>
    </>
  )
}

export default Signup