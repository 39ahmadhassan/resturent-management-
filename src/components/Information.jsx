import React from 'react'
import Button from 'react-bootstrap/Button'
import info1 from '../assets/image/info1.png'
import info2 from '../assets/image/info2.png'
import info3 from '../assets/image/info3.jpg'
import info4 from '../assets/image/info4.png'
function Information() {
  return (
    <div className='information'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 div_img">
                <div>
                    <a href="">
                        <img src={info1} alt="" />
                    </a>
                </div>
                <div>
                <a href="">
                        <img src={info2} alt="" />
                    </a>
                </div>
                <div>
                <a href="">
                        <img src={info3} alt="" />
                    </a>
                </div>
                <div>
                    <div className='info'>
                        <img src={info4} alt="" />
                        <div>
                            <p>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
                            <Button variant="danger" size="lg">
                            explore menu
                            </Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information