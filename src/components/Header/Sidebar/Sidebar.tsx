import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(10px);
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
	top: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
`

const CloseIcon = styled(FaTimes)`
	color: #fff;
`

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`

const SidebarWrapper = styled.div`
	color: #fff;
`

const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`

const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;
	position: relative;

	&:hover {
		background-color: white;
		color: black; /* Change color on hover */
		transform: scale(1.1); /* Scale up the link */
		transition: 0.2s ease-in-out;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add box shadow */
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Add glow effect */

		/* Blur the other borders */
		&::before, &::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			height: 100%;
			background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
			filter: blur(5px); /* Apply blur */
			transition: filter 0.2s ease-in-out;
			z-index: -1; /* Behind the text */
		}
	}

	&:hover::before {
		top: -3px;
		height: 2px;
		background: rgba(255, 255, 255, 0.8);
		filter: blur(0);
	}

	&:hover::after {
		bottom: -3px;
		height: 2px;
		background: rgba(255, 255, 255, 0.8);
		filter: blur(0);
	}
`;

interface SidebarProps {
	isOpen: boolean;
	toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
	return <>
		<SidebarContainer $isOpen={isOpen} onClick={toggle} >
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="home" onClick={toggle} offset={-80} smooth={true} duration={500} activeClass="active">Home</SidebarLink>
					<SidebarLink to="about" onClick={toggle} offset={-80} smooth={true} duration={500}>About</SidebarLink>
				
					<SidebarLink to="publications" onClick={toggle} offset={-80} smooth={true} duration={500}>Publications</SidebarLink>
				</SidebarMenu>
				{/* <SidebarBtnWrap>
					<SidebarBtn to="/">GitHub</SidebarBtn>
				</SidebarBtnWrap> */}
			</SidebarWrapper>
		</SidebarContainer>
	</>
}

export default Sidebar
