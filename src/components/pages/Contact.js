import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-body'>
			<div className='contact-main'>
				<h1>Get in touch with me!</h1>
				<h2 className='info'>EMAIL: nolanbeyer40@gmail.com</h2>
				<h2 className='info'>FACEBOOK: <a className='links' href='https://www.facebook.com/nolan.beyer/'><i class="fab fa-facebook"></i></a></h2>
				<h2 className='info'>
					LINKEDIN: <a className='links' href='https://www.linkedin.com/in/nolan-beyer-5252731b1/' className='fab fa-linkedin'></a>
				</h2>
				<h2 className='info'>
					GITHUB :
					<a className='links' className='fab fa-github' href='https://github.com/NolanBeyer'></a>
				</h2>
				<h2 className='info'>
					RESUME: <a className='links' href='https://docs.google.com/document/d/1vDKrCI6gJ_dlaeLlpHgoYI028fGBEmxCJwByaa39pTw/edit?usp=sharing'><i class="far fa-file"></i></a>
				</h2>
			</div>
		</div>
	)
}

export default Contact
