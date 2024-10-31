import './Navbar.css'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false)
		})
	}, [])

	return (
		<nav className={`container ${sticky ? 'dark-nav' : ''}`}>
			<img
				src={logo}
				alt='Edusity logo'
				className='logo'
			/>
			<ul>
				<li>
					<Link
						to='hero'
						smooth={true}
						offset={0}
						duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='program'
						smooth={true}
						offset={-260}
						duration={500}>
						Program
					</Link>
				</li>
				<li>
					<Link
						to='about'
						smooth={true}
						offset={-150}
						duration={500}>
						About us
					</Link>
				</li>
				<li>
					<Link
						to='campus'
						smooth={true}
						offset={-260}
						duration={500}>
						Campus
					</Link>
				</li>
				<li>
					<Link
						to='testimonials'
						smooth={true}
						offset={-260}
						duration={500}>
						Testimonials
					</Link>
				</li>
				<li>
					<button className='btn'>
						<Link
							to='contact'
							smooth={true}
							offset={-260}
							duration={500}>
							Contact us
						</Link>
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
