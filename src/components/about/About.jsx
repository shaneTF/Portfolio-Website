import React from 'react'
import './about.css'
import ME from '../../assests/52.jpg'
import {BsPersonWorkspace} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Official Projects</small>
              <small>1 Unofficial Project</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ut beatae nisi natus, doloremque blanditiis corporis nemo autem velit nesciunt doloribus recusandae, porro omnis neque laborum fuga voluptas, quae commodi.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About