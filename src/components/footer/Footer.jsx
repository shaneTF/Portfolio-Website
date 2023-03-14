import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>SHANE FRANKLIN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com" target='_blank'><FiTwitter/></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shane Franklin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer