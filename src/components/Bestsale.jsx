import React from 'react'
import best1 from '../assets/image/best1.png'
import best2 from '../assets/image/best2.png'
import best3 from '../assets/image/best3.png'
import best4 from '../assets/image/best4.png'
import Button from 'react-bootstrap/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Sale(props){
  return(
    <div className='deal'>
              <div className='icon'>
                <div>                  
                <span>1</span>
                <span>1</span>
                <span>1</span>
                </div>
              </div>
              <h6 className='mt-4'>{props.title}</h6>
              <p style={{backgroundColor: '#ea002a',width: '35%', padding: '5px'}}>{props.price}</p>
              <img src={props.img} alt="" />
            </div>
  )
}
function Bestseal() {
  return (
    <>
     <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>best sale</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 top_deal">
            <Sale img={best1} price="250" title="Krunch Burger"/>
            <Sale img={best2} price="550" title="Hot Wings Bucket"/>
            <Sale img={best3} price="680" title="Mighty Zinger"/>
            <Sale img={best4} price="490" title="Krunch Combo"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bestseal