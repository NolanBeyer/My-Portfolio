import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className='main-footer'>
            <a className='links' href='https://github.com/NolanBeyer'><i class="fab fa-github"></i> GitHub</a>
            <a className='links' href='https://www.linkedin.com/in/nolan-beyer-5252731b1/'><i class="fab fa-linkedin"></i> in LinkedIn</a>
            <Link className='links'><i class="fas fa-envelope"></i> Email</Link>
        </div>
    )
}

export default Footer