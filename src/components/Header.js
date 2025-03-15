import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #004f9f;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #004f9f;
`;

const Nav = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 0;
    border-bottom: 1px solid #eee;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: ${({ active }) => (active ? '#004f9f' : '#333')};
  font-weight: ${({ active }) => (active ? '700' : '400')};
  transition: color 0.3s;
  &:hover {
    color: #004f9f;
  }
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 24px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <LogoImage src="/images/logo.jpg" alt="Triple AIL Logo" />
            <LogoText>Triple AIL</LogoText>
          </Link>
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <Nav isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <NavLink to="/" active={isActive('/')}>
                {t('header.home')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" active={isActive('/about')}>
                {t('header.about')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services" active={isActive('/services')}>
                {t('header.services')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/company" active={isActive('/company')}>
                {t('header.company')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" active={isActive('/contact')}>
                {t('header.contact')}
              </NavLink>
            </NavItem>
          </NavList>
          <LanguageSwitcher />
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header; 