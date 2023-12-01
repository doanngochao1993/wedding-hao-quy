import React from 'react'
import Logo from '../assets/images/logo.png'
import vcb from '../assets/images/VCB.jpg'
import momo from '../assets/images/Momo.jpg'
import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '400px', // Chỉnh kích thước chiều rộng
    height: '800px', // Chỉnh kích thước chiều cao
    margin: 'auto', // Căn giữa theo chiều ngang
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};




function Footer() {
  const [QrShow, setQrShow] = useState(false)
  const handleTextClick = () => {
    setQrShow(true);
  };

  const closePopup = () => {
    setQrShow(false);
  };

  const Popup = ({ isOpen, onClose }) => {
    return (
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Popup"
      >
        <img src={momo} alt='' />
        <div><p>0908321107 Doan Ngoc Hao</p></div>
        <img src={vcb} alt='' />
        <div><p>0501000116099 VCB-Doan Ngoc Hao</p></div>
      </Modal>
    );
  };

  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='#'>
                <img src={Logo} alt='' />
                <div onClick={handleTextClick}>
                <span >
                  Ngọc Quý <small>&</small> Ngọc Hảo
                </span>
                <p>Click here to see QR code</p>
                <Popup isOpen={QrShow} onClose={closePopup} />
                </div>
              </a>
            </h2>
            <p className='copyright'>January 14, 2024 – Hóc Môn, Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
