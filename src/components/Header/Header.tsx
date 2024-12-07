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

	// Function to generate random symbols
	const getRandomSymbol = (): string => {
		return symbols[Math.floor(Math.random() * symbols.length)];
	};

	const handleMouseEnter = () => {
		const timeout = window.setTimeout(() => {
			setIsHovered(true);
			setShouldReset(false); // Prevent premature reset
			setSpeed(70); // Reset speed
			setSymbols(['@', '#', '%', '&', '$', '*', '!', '?', '(', ')', '=', '+', 'A', 'B', 'X', '.']); // Reset symbols
		}, 300); // 0.3 seconds delay
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
			// Start randomizing the text
			interval = window.setInterval(() => {
				setDisplayText(() => {
					let randomText = '';
					for (let i = 0; i < originalText.length; i++) {
						// If shouldReset is false, randomize; else, show original text
						randomText += shouldReset
							? originalText[i]
							: getRandomSymbol();
					}
					return randomText;
				});
			}, speed);

			// Stop animation and reset after 1 second
			resetTimeout = window.setTimeout(() => {
				setShouldReset(true);
				setIsHovered(false);
			}, 1000);

			// Increase speed and pop symbols after 3 seconds
			speedIncreaseInterval = window.setTimeout(() => {
				const speedInterval = window.setInterval(() => {
					setSpeed((prevSpeed) => prevSpeed - 1);
					setSymbols((prevSymbols) => {
						const newSymbols = prevSymbols.slice(0, -1);
						// Ensure A, B, X, . are not removed
						if (['A', 'B', 'X', '.'].some(char => !newSymbols.includes(char))) {
							return prevSymbols;
						}
						return newSymbols;
					});
				}, 70);
				return () => clearInterval(speedInterval);
			}, 1000);

			// Reset to original text after 1 seconds
			window.setTimeout(() => {
				setDisplayText(originalText);
				setShouldReset(false);
				setIsHovered(false);
			}, 1000);
		} else if (shouldReset) {
			// Gradually restore the original text
			const restoreInterval = window.setInterval(() => {
				setDisplayText((prevText) => {
					let updatedText = '';
					for (let i = 0; i < originalText.length; i++) {
						updatedText += prevText[i] === originalText[i]
							? originalText[i]
							: getRandomSymbol();
					}
					if (updatedText === originalText) {
						clearInterval(restoreInterval);
					}
					return updatedText;
				});
			}, 70);
		}

		// Cleanup intervals and timeouts
		return () => {
			if (interval) clearInterval(interval);
			if (resetTimeout) clearTimeout(resetTimeout);
			if (speedIncreaseInterval) clearTimeout(speedIncreaseInterval);
		};
	});

	return (
		<header className="header">
			<ul className="navGroup">
				<li className="logo">
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
				</li>
				<li className="nav">
					<a className="link" href="#home">Home</a>
				</li>
				<li>
					<a className="link" href="#about">About</a>
				</li>
				<li className="dropdown">
					<a className="link dropdown-toggle" href="#more" onClick={(e) => e.preventDefault()}>
						Resume
						<img src='https://img.icons8.com/?size=100&id=PnaGTCLxvR58&format=png&color=000000' ></img>
					</a>
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
				</li>
				<li>
					<a className="link" href="#contact">Contact</a>
				</li>
				<li>
				<ul>
					<li>
							<a className="social-link" href="https://github.com/abxshah">
								<img src='https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000' ></img>
							</a>
						</li>
						<li>								<a className="social-link" href="://github.com/abxshah">
								<img src='https://img.icons8.com/?size=100&id=MR3dZdlA53te&000000'></img>
							</a>
						</li>
					</ul>
					</li>
			</ul>
		</header>
	);
};

export default Header;
