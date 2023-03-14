import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {FaServer} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {FaCss3} from 'react-icons/fa'
import {FaRobot} from 'react-icons/fa'
import {AiOutlineApi} from 'react-icons/ai'
import {MdDesignServices} from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <CgWebsite className='service__list-icon' />
              <p>Currently, Static Website Design.</p>
            </li>
            <li>
              <FaCss3 className='service__list-icon' />
              <p>Custom CSS styling to the clients specifications.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Bot Building/Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaRobot className='service__list-icon' />
              <p>Custom Discord Bots!</p>
            </li>
            <li>
              <AiOutlineApi className='service__list-icon' />
              <p>Able to integrate with most API's.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Design the embed the way you want it to look.</p>
            </li>
            <li>
              <FaServer className='service__list-icon' />
              <p>Hosting will be done by client.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services