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
							src='https://scontent.fhio2-2.fna.fbcdn.net/v/t1.0-9/122570504_3476931309057264_1212936746847868787_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=jZoGilk-_b0AX90C4oq&_nc_ht=scontent.fhio2-2.fna&oh=589b49b3d2e0c583cb333c3c0a666646&oe=5FB98676'
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
