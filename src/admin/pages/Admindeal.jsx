import React from 'react'
import Mysidebar from '../components/Mysidebar'

function Admindeal() {
  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 border sidebar"><Mysidebar/></div>
        <div className="col-md-10 border content">
          <h1>deal and discount</h1>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Admindeal