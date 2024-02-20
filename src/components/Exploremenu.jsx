import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import food1 from '../assets/image/f1.png'
import food2 from '../assets/image/f2.png'
import food3 from '../assets/image/f3.png'
import food4 from '../assets/image/f4.png'
import Modaldata from './Modaldata';

export default function Exploremenu() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  const handleOpenModal4 = () => setOpenModal3(true);
  const handleCloseModal4 = () => setOpenModal3(false);

  function Menu(props){
    return(
      <div className="menu">
        <img src={props.img} alt="" />
        <h5>{props.name}</h5>
      </div>
    )
  }
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div className="row">
            <div onClick={handleOpenModal1}className="col-lg-3 col-md-6 col-6">
              <Menu img={food1} name="everyday value"/>
            </div>
            <div onClick={handleOpenModal2} className="col-lg-3 col-md-6 col-6">
              <Menu img={food2} name="Ala-Carte-&-Combos"/>
            </div>
            <div onClick={handleOpenModal3} className="col-lg-3 col-md-6 col-6">
              <Menu img={food3} name="Signature-Boxes"/>
            </div>
            <div onClick={handleOpenModal4} className="col-lg-3 col-md-6 col-6">
              <Menu img={food4} name="Sharing"/>
            </div>

            
              <Modal
                keepMounted
                open={openModal1}
                onClose={handleCloseModal1}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Modaldata/>
              </Modal>
               <Modal
                keepMounted
                open={openModal2}
                onClose={handleCloseModal2}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Modaldata/>
              </Modal> 
               <Modal
                keepMounted
                open={openModal3}
                onClose={handleCloseModal3}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Modaldata/>
              </Modal> 
               <Modal
                keepMounted
                open={openModal4}
                onClose={handleCloseModal4}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Modaldata/>
              </Modal> 
          </div>
        </div>
      </div>
    </>
  );
}
