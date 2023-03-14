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
              <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Official Projects</small>
              <br></br>
              <small>2 Unofficial Project</small>
            </article>
          </div>

          <p>
            With a desire to learn and a wandering mind, I have what it takes to get the job done! I have about 4-5 years of experience currently as a professional Software Engineer/Consultant. By my standards I have worked on 2 official projects provided by the company's I have worked for and have 2 unoffical projects I work on in my spare time. One from Infosys, working with Backend technologies, such as Hadoop/Hive and Python. And another from Sogeti/Capgemini working with Frontend technologies, such as React and Typescript. Outside of work I like to build bots, lately discord bots, based on posts from Reddit or from friends. I am also into photography/videography, but that hasn't gotten as much traction. 
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About