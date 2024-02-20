import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Adminsignup() {
    const [usersign, setusersign] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        conferm_password: "",
      })
      const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setusersign({...usersign,[name]:value})
      }
      return (
        <div className='admin_log'>
          <form action="">
            <label htmlFor="">name</label>
            <input name="name" value={usersign.name} onChange={handleInput} type="text" />
            <label htmlFor="">email</label>
            <input name="email" value={usersign.email} onChange={handleInput} type="text" />
            <label htmlFor="">phone</label>
            <input name="phone" value={usersign.phone} onChange={handleInput} type="text" />
            <label htmlFor="">password</label>
            <input name="password" value={usersign.password} onChange={handleInput} type="text" />
            <label htmlFor="">conferm password</label>
            <input name="conferm_password" value={usersign.conferm_password} onChange={handleInput} type="text" />
            <input type="submit" />
          </form>
        </div>
      )
}

export default Adminsignup