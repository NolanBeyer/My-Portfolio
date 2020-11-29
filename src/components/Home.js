import React from 'react'

const Home = () => {
	return (
		<div>
			<div className='home--page'>
				<h1 className='name'>Nolan Beyer</h1>
				<h2>Junior Full Stack Web Developer</h2>
				<i class='fas fa-code'></i>
				<h3>React JS || HTML/CSS || Node || Express || SQL</h3>
			</div>

			<div className='about--me'>
				<h2>PROJECTS</h2>
			</div>

			<div className='projects'>
				<div className='card'>
					<div className='image'>
						<img
							alt='deal'
							src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
						/>
					</div>
					<div className='title'>
						<h2>OFFER UP</h2>
					</div>

					<hr />

					<div className='description'>
						<p>
							A Craig's list style app that has working authentication and full
							crud.
						</p>
					</div>
					<div className='link'>
						<a className='links' href='https://offerup.page/#/'>
							<i class='fab fa-chrome'></i> site
						</a>
						<a className='links' href='https://github.com/NolanBeyer/personal-project'>
							<i class='fab fa-github'></i> code
						</a>
					</div>
				</div>


				<div className='card'>
					<div className='image'>
						<img 
							alt='security'
							src='https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/128686846_3612580498803002_5196109832987003516_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=dU-JOka2M6UAX_32CNl&_nc_ht=scontent.fhio2-1.fna&oh=45b6a8e22a50e47f1b3cd89492a876ba&oe=5FEAB890'
						/>
					</div>
					<div className='title'>
						<h2>FACE REC</h2>
					</div>

					<hr />

					<div className='description'>
						<p>
							A security site with two factor authentication to store login info from various sites.
						</p>
					</div>
					<div className='link'>
						<a className='links eye'  href='https://www.face-id.dev/#/'>
							<i class='fab fa-chrome'></i> site
						</a>
						<a className='links' href='https://github.com/darrylking15/image-recognition'>
							<i class='fab fa-github'></i> code
						</a>
					</div>
				</div>

				
				
			</div>
		</div>
	)
}

export default Home
