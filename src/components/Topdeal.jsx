import React from 'react'
import top1 from '../assets/image/top1.png'
import top2 from '../assets/image/top2.png'
import top3 from '../assets/image/top3.png'
import top4 from '../assets/image/top4.png'
import Button from 'react-bootstrap/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Deals(props){
  return(
    <div className='deal'>
              <div className='icon'>
                <div>                  
                <span>1</span>
                <span>1</span>
                <span>1</span>
                </div>
                <FavoriteBorderIcon/>
              </div>
              <img src={props.img} alt="" />
              <h6>{props.title}</h6>
              <p>{props.text}</p>
              <p>Rs {props.price}</p>
              <div className='btn_wrap'>
              <Button variant="danger">+ add to busket</Button>
              </div>
            </div>
  )
}
function Topdeal() {
  return (
    <>
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>top deals</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 top_deal">
            <Deals img={top1} price="640" text="Twister + 1 Regular fries + 1 Regular drink" title="Twister Combo"/>
            <Deals img={top2} price="810" text="1 Zinger Stacker + 1 Regular fries + 1 Regular drink" title="Zinger Stacker Combo"/>
            <Deals img={top3} price="1150" text="Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks" title="Crispy Duo Box"/>
            <Deals img={top4} price="2290" text="An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink" title="Family Festival 3"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Topdeal
export {Deals}