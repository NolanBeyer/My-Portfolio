import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
	return (
		<div>
			<div className='main--nav'>
				<Link className='links' to={'/'}>Home</Link>
				<Link className='links' to={'/about'}>About</Link>
				<Link className='links' to={'contact'}>Contact</Link>
			</div>
		</div>
	)
}

export default Nav
