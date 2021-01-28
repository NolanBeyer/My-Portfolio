import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
		return (
			<Fragment>
				<div className='main--nav'>
					<Link className='links' to={'/'}>
						Home
					</Link>
					<Link className='links' to={'/about'}>
						About
					</Link>
					<Link className='links' to={'contact'}>
						Contact
					</Link>
				</div>
			</Fragment>
			
		)
	}

export default Nav
