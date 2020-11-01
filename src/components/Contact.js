import React from 'react'

const Contact = () => {
	return (
		<div className='contact-body'>
			<div className='contact-main'>
				<h1>Get in touch with me!</h1>
				<h2 className='info'>EMAIL: nolanbeyer40@gmail.com</h2>
				<h2 className='info'>PHONE: (541) 979-7040</h2>
				<h2 className='info'>FACEBOOK: <a className='links' href='https://www.facebook.com/nolan.beyer/'><i class="fab fa-facebook"></i></a> </h2>
				<h2 className='info'>
					LINKEDIN: <a className='links' href='https://www.linkedin.com/in/nolan-beyer-5252731b1/' className='fab fa-linkedin'></a>
				</h2>
				<h2 className='info'>
					GITHUB :
					<a className='links' href='https://github.com/NolanBeyer' className='fab fa-github'></a>
				</h2>
			</div>
		</div>
	)
}

export default Contact
