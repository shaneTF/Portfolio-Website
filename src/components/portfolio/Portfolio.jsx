import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/website-design-2.png'
import IMG2 from '../../assests/BotPFP.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio!',
    subtext: 'My personal website repo!',
    github: 'https://github.com/shaneTF/Portfolio-Website'
  },
  {
    id: 2,
    image: IMG2,
    title: "Warbot!",
    subtext: "You'll have to ask about this one as it's a private repo!",
    github: 'https://github.com/shaneTF/' 
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtext, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{subtext}</small>
                <div className='porfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio