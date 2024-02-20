import React from 'react'
import Mysidebar from '../components/Mysidebar'

function Adminhome() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 border sidebar"><Mysidebar/></div>
        <div className="col-md-10 border content">
          <h1>Dashboard</h1>
          <hr />
          <div className="row">
            <div className="col-md-3 border">sells graph</div>
            <div className="col-md-3 border">total visitor</div>
            <div className="col-md-3 border">new user</div>
            <div className="col-md-3 border">total orders</div>
          </div>
          <div className="row">
            <div className="col-md-6 border">recently</div>
            <div className="col-md-6 border">monthly revenue</div>
          </div>
          <div className="row">
            <div className="col-12">trending orders</div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Adminhome