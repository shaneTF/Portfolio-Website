import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/Knuten-sunrise-winter-e1511472557708.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>Shane Franklin</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me' />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
      
    </header>
  )
}

export default Header