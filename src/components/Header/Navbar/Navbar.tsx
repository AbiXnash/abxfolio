import { useState, useEffect } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaGithub } from 'react-icons/fa';

const Nav = styled.nav`
  background: var(--header-bg);
  border: 1px solid var(--border-clr);
  border-radius: 30px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
  color: var(--font-clr);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
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
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: var(--dark-font-clr);
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--primary-clr);
    color: var(--primary-clr);
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: var(--dark-btn-clr);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--light-font-clr);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--light-btn-clr);
    color: var(--dark-font-clr);
  }
`;

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const originalText = 'ABX.';
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split('')
            .map((char) => (Math.random() > 0.5 ? char : '@'))
            .join('')
        );
      }, 70);

      const resetTimeout = setTimeout(() => {
        setDisplayText(originalText);
        setIsHovered(false);
      }, 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(resetTimeout);
      };
    }
  }, [isHovered, originalText]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {displayText}
          </span>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="publications">Publications</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="achievements">Achievements</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="https://github.com/AbiXnash/">
            <FaGithub style={{ marginRight: '8px' }} />
            Github
          </NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
