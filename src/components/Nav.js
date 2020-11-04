import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
	constructor() {
		super()

		this.state = {
			dropdown: false,
		}
	}

	toggleDropDown = () => {
		this.setState({ dropdown: !this.state.dropdown })
	}

	render() {
		return (
			<div>
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

				<div className='dropdown' onClick={this.toggleDropDown}>
					<i class='fas fa-bars burger'></i>
					</div>
				{this.state.dropdown ? (
					<div className='mobile-menu'>
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
				) : null}
			</div>
			
		)
	}
}

export default Nav
