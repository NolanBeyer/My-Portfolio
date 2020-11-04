import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
	constructor() {
		super()

		this.state = {
			dropDown: false,
		}
	}

	toggleDropdown = () => {
		this.setState({ dropDown: !this.state.dropDown })
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

				<div className='dropdown' onClick={this.toggleDropdown}><i class='fas fa-bars burger'></i></div>
					{ this.state.dropDown ? (
						<div className='mobileMenu'>
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
					): null}
			</div>
		)
	}
}

export default Nav
