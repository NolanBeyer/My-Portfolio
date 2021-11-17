import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about__body'>
        <h1 className='about__title'>About Me</h1>
        <h4 className='about__description'>
          I've always been really interested in technology, but never thought
          about a career in web development until summer of 2019. I started
          doing some research and just trying to learn some of the basics in
          HTML and CSS. The thought of making this a full time career got me
          really excited. I've spent countless hours over the last year learning
          and teaching myself. Although I still have a lot to learn I'm really
          excited for this next step and am willing to learn additional
          technologies to fit the needs of future employers.
        </h4>
        <div className='work'>
          <h1 className='about__title'>Experience</h1>
          <div className='work__history'>
            <h2 className='work__title'>Dev Mountain:</h2>
            <h4>
              Immersive, 13-week web-development bootcamp for learning
              Javascript, HTML/CSS, React, Node, and PostgreSQL frameworks.
            </h4>
          </div>
          <div className='work'>
            <h2 className='work__title'>REdevly:</h2>
            <div className='work__history'>
              <h4 className='work__description'>
                Working part time for a startup primarily focusing on HTML,
                CSS/SCSS along with learning the basics of angular.{' '}
              </h4>
            </div>
          </div>
        </div>
        <div className='work'>
          <div className='work__history'>
            <h2 className='work__title'>Graphic designer:</h2>
            <h4 className='work__description'>
              Designed graphics for various businesses using adobe illustrator.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
