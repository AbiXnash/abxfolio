import './Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
	const originalText = "ABX.";
	const [displayText, setDisplayText] = useState<string>(originalText);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [shouldReset, setShouldReset] = useState<boolean>(false);
	const [speed, setSpeed] = useState<number>(80);
	const [symbols, setSymbols] = useState<string[]>(['@', '#', '%', '&', '$', '*', '!', '?', '(', ')', '=', '+', 'A', 'B', 'X', '.']);
	const [hoverTimeout, setHoverTimeout] = useState<number | undefined>(undefined);
	const [menuOpen, setMenuOpen] = useState<boolean>(false); // Hamburger menu state
	const [resumeOpen, setResumeOpen] = useState<boolean>(false); // Dropdown menu state for Resume

	// Function to generate random symbols
	const getRandomSymbol = (): string => symbols[Math.floor(Math.random() * symbols.length)];

	const handleMouseEnter = () => {
		const timeout = window.setTimeout(() => {
			setIsHovered(true);
			setShouldReset(false);
			setSpeed(70);
			setSymbols(['@', '#', '%', '&', '$', '*', '!', '?', '(', ')', '=', '+', 'A', 'B', 'X', '.']);
		}, 300);
		setHoverTimeout(timeout);
	};

	const handleMouseLeave = () => {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			setHoverTimeout(undefined);
		}
		setIsHovered(false);
		setShouldReset(true);
	};

	useEffect(() => {
		let interval: number | undefined;
		let resetTimeout: number | undefined;
		let speedIncreaseInterval: number | undefined;

		if (isHovered) {
			interval = window.setInterval(() => {
				setDisplayText(() => {
					let randomText = '';
					for (let i = 0; i < originalText.length; i++) {
						randomText += shouldReset ? originalText[i] : getRandomSymbol();
					}
					return randomText;
				});
			}, speed);

			resetTimeout = window.setTimeout(() => {
				setShouldReset(true);
				setIsHovered(false);
			}, 1000);

			speedIncreaseInterval = window.setTimeout(() => {
				const speedInterval = window.setInterval(() => {
					setSpeed((prevSpeed) => prevSpeed - 1);
					setSymbols((prevSymbols) => {
						const newSymbols = prevSymbols.slice(0, -1);
						if (['A', 'B', 'X', '.'].some(char => !newSymbols.includes(char))) {
							return prevSymbols;
						}
						return newSymbols;
					});
				}, 70);
				return () => clearInterval(speedInterval);
			}, 1000);

			window.setTimeout(() => {
				setDisplayText(originalText);
				setShouldReset(false);
				setIsHovered(false);
			}, 1000);
		} else if (shouldReset) {
			const restoreInterval = window.setInterval(() => {
				setDisplayText((prevText) => {
					let updatedText = '';
					for (let i = 0; i < originalText.length; i++) {
						updatedText += prevText[i] === originalText[i] ? originalText[i] : getRandomSymbol();
					}
					if (updatedText === originalText) {
						clearInterval(restoreInterval);
					}
					return updatedText;
				});
			}, 70);
		}

		return () => {
			if (interval) clearInterval(interval);
			if (resetTimeout) clearTimeout(resetTimeout);
			if (speedIncreaseInterval) clearTimeout(speedIncreaseInterval);
		};
	});

	return (
		<header className="header">
			<div className="header-container">
				<h2
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="logo-text"
				>
					<a className="link" href="#home">
						{displayText.split('').map((char, index) => (
							<span key={index} className="char">
								{char}
							</span>
						))}
					</a>
				</h2>
				<nav className={`navGroup ${menuOpen ? 'open' : ''}`}>
					<a className="link" href="#home">Home</a>
					<a className="link" href="#about">About</a>
					<div
						className="dropdown"
						onMouseEnter={() => setResumeOpen(true)}
						onMouseLeave={() => setResumeOpen(false)}
					>
						<a className="link dropdown-toggle" href="#resume">
							Resume
							<img src='https://img.icons8.com/?size=100&id=PnaGTCLxvR58&format=png&color=000000' alt="Dropdown" />
						</a>
						{resumeOpen && (
							<ul className="dropdown-menu">
								<li>
									<a className="link" href="#publications">Publications</a>
								</li>
								<li>
									<a className="link" href="#projects">Projects</a>
								</li>
								<li>
									<a className="link" href="#achievements">Achievements</a>
								</li>
							</ul>
						)}
					</div>
					<a className="link" href="#contact">Contact</a>
				</nav>
				<div className="hamburger-social">
					<div className="social-links">
						<a className="social-link" href="https://github.com/abxshah">
							<img src='https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000' alt="GitHub" />
						</a>
						<a className="social-link" href="https://linkedin.com">
							<img src='https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000' alt="LinkedIn" />
						</a>
					</div>
					<button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
