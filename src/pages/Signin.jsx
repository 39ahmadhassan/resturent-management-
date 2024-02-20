import React from 'react'
import gif from '../assets/image/login.gif';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1c1816"
  // add more CSS properties as needed
};
const form_wrap ={
  width: '98vw',
  height: "90vh",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
function Signin() {
  return (
    <div style={form_wrap}>
    <div className="container">
      <div className="row" style={myStyle}>
        <div className="col-md-6 text-center">
          <img src={gif} alt=""/>
        </div>
        <div className="col-md-6"> 
          <form className='form'>
          <h1>welcome!</h1>
          <div>
              <label htmlFor="">name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">phone number(3xxxxxxxxx)</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="text" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signin