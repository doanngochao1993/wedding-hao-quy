import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  const closeSideBar = ()=>{
    setShow(false);
    document.body.classList.remove('slide')
  }



  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='#' onClick={closeSideBar}>
            <img src={Logo} alt='' />
            <span>
              Ngọc Quý <small>&</small> Ngọc Hảo
            </span>
            <h6>14.01.2024</h6>
          </a>
        </div>
        <nav className='oliven-main-menu' onClick={closeSideBar}>
          <ul>
            <li>
              <a href='#home' onClick={closeSideBar}>Nhà</a>
            </li>
            <li>
              <a href='#couple' onClick={closeSideBar}>Đôi Trẻ</a>
            </li>
            {/* <li>
              <a href='#story'>Our Story</a>
            </li> */}
            {/* <li>
              <a href='#organization' onClick={closeSideBar}>Organization</a>
            </li> */}
            <li>
              <a href='#gallery' onClick={closeSideBar}>Ablum Ảnh</a>
            </li>
            <li>
              <a href='#whenwhere' onClick={closeSideBar}>Thời gian và địa điểm</a>
            </li>
            <li>
              <a href='#rsvp' onClick={closeSideBar}>R.S.V.P</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Ngọc Hảo & Ngọc Quý
            <br />
            14 January 2024, Hồ Chí Minh
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
