import React from 'react'
import routes from './routes'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

function App() {
	return (
		<div>
			<Nav />
			{routes}
			<Footer />
		</div>
	)
}

export default App
