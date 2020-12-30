import React from 'react';
import './About.css';

const About = () => {
	return (
		<div className='main'>
			<div className='about'>
				<h1>About Me</h1>
				<h4>I've always been really interested in technology, but never thought
				about a career in web development until summer of 2019. I started doing
				some research and just trying to learn some of the basics in HTML and
				CSS. I fell in love with the thought of making this a full time career.
				I've spent countless hours over the last year and although I still have
				a lot to learn I'm really excited for this next step and am willing to
				learn additional technologies to fit the needs of future employers.
				</h4>
				<div className='jobs'>
					<h1>Experience</h1>
					<div clasName='job1'>
						<h2>Dev Mountain</h2>
						<h4>Immersive, 13-week web-development bootcamp for learning Javascript, HTML/CSS, React, Node, and PostgreSQL frameworks.</h4>
					</div>
			<div className='jobs'>
				<div className='job3'>
					<h2>REdevly</h2>
					<h4>Working part time for a startup primarily focusing on HTML, CSS/SCSS along with learning the basics of angular. </h4>
				</div>
			</div>
			</div>
			<div className='jobs'>
				<div className='job2'>
					<h2>Graphic designer</h2>
					<h4>Designed graphics for various buisnesess using adobe illustrator.</h4>
				</div>
			</div>
		</div>
		</div>
	)
}

export default About
