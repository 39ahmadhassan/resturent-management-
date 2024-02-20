import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import cart from '../assets/image/cart1.png';
import dri1 from '../assets/image/dri1.png'
import dri2 from '../assets/image/dri2.png'
import dri3 from '../assets/image/dri3.png'
import dri4 from '../assets/image/dri4.png'
import dri5 from '../assets/image/dri5.png'
import dri6 from '../assets/image/dri6.png'
import dri7 from '../assets/image/dri7.png'
import dri8 from '../assets/image/dri8.png'
import dri9 from '../assets/image/dri9.png'
import dri10 from '../assets/image/dri10.png'
import dri11 from '../assets/image/dri11.png'
import dri12 from '../assets/image/dri12.png'
import { useState } from 'react';
const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: '#1C1816',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    color: 'white'
  };
  const typography = {
    textTransform: 'capitalize',
    fontWeight: '700',
    letterSpacing: '2px',
  }
function Modaldata() {
    const[count,setCount] = useState(0);
    function Product(props){
        return(
          <div>
            <img src={props.img} alt="" />
            <p>{props.name} <span>(rs {props.price})</span></p>
            <button>add</button>
          </div>
        )
      }
  return (
    <>
      <Box sx={style}>
                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    <Accordion className='accordion'>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={typography}>choose an option</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordion_detail'>
                          <Typography>
                            <div>
                              <input type="checkbox" />
                              <p>krunch burger</p>
                              <button>add</button>
                            </div>
                          </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordion'>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={typography}>add a soft drink</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordion_detail'>
                          <Typography>
                            <Product img={dri1} price="120" name="pepsi regular"/>
                            <Product img={dri2} price="120" name="7up regular"/>
                            <Product img={dri3} price="120" name="mirinda regular"/>
                            <Product img={dri4} price="120" name="due regular"/>
                            <Product img={dri5} price="90" name="mineral water 500ml"/>
                          </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordion'>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={typography}>add ons</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordion_detail'>
                        <Typography>
                            <Product img={dri6} price="90" name="Coleslaw"/>
                            <Product img={dri7} price="30" name="Dinner Roll"/>
                            <Product img={dri8} price="330" name="Large Fries"/>
                            <Product img={dri9} price="250" name="One Pc Chicken"/>
                            <Product img={dri10} price="50" name="Cheese"/>
                            <Product img={dri11} price="30" name="Mayo Dip"/>
                            <Product img={dri12} price="30" name="Vietnamese Dip"/>
                            <Product img={dri6} price="90" name="Coleslaw"/>
                            <Product img={dri7} price="30" name="Dinner Roll"/>
                            <Product img={dri8} price="330" name="Large Fries"/>
                          </Typography>
                        </AccordionDetails>
                    </Accordion>

                  </Typography>
                  <Typography id="keep-mounted-modal-description">
                    <div className='cart_wrap'>
                      <img src={cart} alt="" />
                      <h2>Krunch Burger</h2>
                      <p>Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</p>
                      <div className='quantity'>
                        <button onClick={()=>{if(count === 0){setCount(0)}else{setCount(count - 1)} }}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>{setCount(count + 1)}}>+</button>
                      </div>
                      <div className='btn_wrap'>
                        <span>rs 550</span>
                        <p>add to backet</p>
                        <ChevronRightIcon/>
                      </div>
                    </div>
                  </Typography>
                </Box>
    </>
  )
}

export default Modaldata