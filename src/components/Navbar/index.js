import React, { useState, useCallback } from 'react';
import { Nav, NavLink, NavbarContainer, Span, ColoredSpan, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeButton } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { ReactComponent as LightBulbIcon } from '../../images/light-bulb-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleScroll = useCallback((hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleNavigation = useCallback((path, hash) => {
    navigate(path);
    setTimeout(() => handleScroll(hash), 100);
  }, [navigate, handleScroll]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Span>
            Your<ColoredSpan>Name</ColoredSpan>
          </Span>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>

        <ButtonContainer>
          <NavItems>
            <NavLink onClick={() => handleNavigation('/', '#skills')}>Skills</NavLink>
            <NavLink onClick={() => handleNavigation('/', '#projects')}>Projects</NavLink>
            <NavLink href='/blog'>Blog</NavLink>
            <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
            <ThemeButton onClick={toggleTheme}><LightBulbIcon /></ThemeButton>
          </NavItems>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink onClick={() => { handleNavigation('/', '#skills'); setIsOpen(!isOpen); }}>Skills</MobileLink>
            <MobileLink onClick={() => { handleNavigation('/', '#projects'); setIsOpen(!isOpen); }}>Projects</MobileLink>
            <MobileLink href='/blog' onClick={() => setIsOpen(!isOpen)}>Blog</MobileLink>

            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', alignItems: 'center' }}>
              <GitHubButton style={{ background: theme.bgLight, color: theme.text_primary, border: `1.8px solid ${theme.primary}` }} href={Bio.github} target="_blank">Github</GitHubButton>
              <ThemeButton onClick={() => { toggleTheme(); setIsOpen(!isOpen); }} style={{ background: theme.bgLight, color: theme.text_primary, border: `1.8px solid ${theme.primary}`, borderRadius: '20px'}}>
                <LightBulbIcon style={{ width: '20px', height: '20px' }} />
                <span style={{ marginLeft: '8px' }}>Theme</span>
              </ThemeButton>
            </div>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
