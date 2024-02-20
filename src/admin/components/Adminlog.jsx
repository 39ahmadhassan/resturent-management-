import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Adminlog() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  })
  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuser({...user,[name]:value})
  }
  return (
    <div className='admin_log'>
      {/* <img src={logo} alt="" /> */}
      <form action="">
        <label htmlFor="">email addres</label>
        <input value={user.email} onChange={handleInput} name="email" type="email" />
        <label htmlFor="">password</label>
        <input value={user.password} onChange={handleInput} name="password" type="password" />
        <a href="">forget password</a>
        <input type="submit" />
        <Link to='/adminsignup'><a>create an account</a></Link>
      </form>
    </div>
  )
}
