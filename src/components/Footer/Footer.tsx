import { useState, useEffect } from 'react';
import './Footer.css';
import triangle from '../../assets/triangle.svg';

const Footer = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<footer>
			<div>
				All copyrights reserved &copy; | Abinash {new Date().getFullYear()}
			</div>
			<div>
				{isVisible && (
					<button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<img className="triangle" src={triangle} alt="Top" />
					</button>
				)}
			</div>
		</footer>
	);
};

export default Footer;
