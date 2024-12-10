import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
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

	&:hover {
		color: #01bf71;
		transition: 0.2s ease-in-out;
	}
`

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
					<SidebarLink to="about" onClick={toggle} offset={-80}>About</SidebarLink>
					<SidebarLink to="projects" onClick={toggle} offset={-80}>Projects</SidebarLink>
					<SidebarLink to="publications" onClick={toggle} offset={-80}>Publications</SidebarLink>
					<SidebarLink to="achievements" onClick={toggle} offset={-80}>Achievements</SidebarLink>
					<SidebarLink to="contact" onClick={toggle} offset={-80}>Contact</SidebarLink>
				</SidebarMenu>
				{/* <SidebarBtnWrap>
					<SidebarBtn to="/">GitHub</SidebarBtn>
				</SidebarBtnWrap> */}
			</SidebarWrapper>
		</SidebarContainer>
	</>
}

export default Sidebar
