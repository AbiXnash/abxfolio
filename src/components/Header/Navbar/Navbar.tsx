import { useState, useEffect } from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'
import { FaBars, FaGithub } from 'react-icons/fa'

const Nav = styled.nav`
	// width: 80%;
	// margin: 0 auto;
	background: var(--header-bg);
	border: 1px solid var(--border-clr);
	border-radius: 30px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 5px;
	z-index: 999;
	backdrop-filter: blur(10px);
	background-color: var(--header-white-bg);

	@media screen and (max-width: 1100px) {
		transition: 0.8s all ease;
	}
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 10px 24px;
	max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
	color: var(--font-clr);
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
	font-weight: bold;
`;

const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 1100px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: var(--dark-font-clr);
	}
`

const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const NavItem = styled.li`
	font-size: 1.2rem;

	height: 80px;
`;

const NavLinks = styled(LinkS)`
	color: var(--dark-font-clr);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;



	&.active {
		border-bottom: 3px solid var(--primary-clr);
		color: var(--primary-clr);
	}
`

const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	font-weight: bold;

	@media screen and (max-width: 1100px) {
		margin-right: 50px;
	}
`

const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: var(--dark-btn-clr);
	white-space: nowrap;
	padding: 10px 22px;
	color: var(--light-font-clr);
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: var(--light-btn-clr);
		color: var(--dark-font-clr);
	}
`

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
	const originalText = "ABX.";
	const [displayText, setDisplayText] = useState<string>(originalText);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [shouldReset, setShouldReset] = useState<boolean>(false);
	const [speed, setSpeed] = useState<number>(80);
	const [symbols, setSymbols] = useState<string[]>(['@', '#', '%', '&', '$', '*', '!', '?', '(', ')', '=', '+', 'A', 'B', 'X', '.']);
	const [hoverTimeout, setHoverTimeout] = useState<number | undefined>(undefined);
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

	return <>
		<Nav>
			<NavContainer>
				<NavLogo to='/'>
				<p
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="logo-text"
				>
					<p className="link">
						{displayText.split('').map((char, index) => (
							<span key={index} className="char">
								{char}
							</span>
						))}
					</p>
				</p>
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to='#home'>Home</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='about'>About</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='publications'>Publications</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='projects'>Projects</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='achievements'>Achievements</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='contact'>Contact</NavLinks>
					</NavItem>
				</NavMenu>
				<NavBtn>
				<NavBtnLink to='https://github.com/AbiXnash/' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<FaGithub style={{ marginRight: '8px', marginTop: '0.1px' }} />
					Github
				</NavBtnLink>
				</NavBtn>
			</NavContainer>
		</Nav>
	</>
}

export default Navbar
